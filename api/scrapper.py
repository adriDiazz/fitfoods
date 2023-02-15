from webdriver_manager.chrome import ChromeDriverManager
from selenium import webdriver
from selenium.webdriver.chrome.service import Service as ChromeService
from selenium.webdriver.common.by import By
import time
import json
import sys


def getDietByCalories(calories):

    options = webdriver.ChromeOptions()
    options.add_argument('headless')

    browser = webdriver.Chrome(options=options)

    browser.get('https://www.eatthismuch.com/')

    result = {
        'breakfast': [],
        'lunch': [],
        'dinner': [],
        'snack': [],
    }

    caloriasInput = browser.find_element(By.XPATH, '//*[@id="cal_input"]')
    caloriasInput.send_keys(str(calories))

    generateBtn = browser.find_element(
        By.XPATH, '//*[@id="main_container"]/div/div[2]/div[1]/div[2]/div[6]/div/button')

    generateBtn.click()

    time.sleep(7)

    breakFastDiv = browser.find_element(
        By.XPATH, '//*[@id="main_container"]/div/div[4]/div[1]/div[1]/div/div[3]/div/div[2]/div[3]/div/div/div[1]/div[3]/div/ul')

    for li in breakFastDiv.find_elements(By.TAG_NAME, 'li'):
        plate = li.find_element(By.CLASS_NAME, 'print_name').text
        result['breakfast'].append({
            'name': plate,
            'value': li.find_element(By.CLASS_NAME, 'amount_input').get_attribute('value')
        })
        # result['breakfast']['value'] = li.find_element(
        #     By.XPATH, 'amount_input').get_attribute('value')

    lunchDiv = browser.find_element(
        By.XPATH, '//*[@id="main_container"]/div/div[4]/div[1]/div[1]/div/div[3]/div/div[2]/div[3]/div/div/div[3]/div[3]/div/ul')

    for li in lunchDiv.find_elements(By.TAG_NAME, 'li'):
        plate = li.find_element(By.CLASS_NAME, 'print_name').text
        result['lunch'].append({
            'name': plate,
            'value': li.find_element(By.CLASS_NAME, 'amount_input').get_attribute('value')
        })

    dinnerDiv = browser.find_element(
        By.XPATH, '//*[@id="main_container"]/div/div[4]/div[1]/div[1]/div/div[3]/div/div[2]/div[3]/div/div/div[3]/div[3]/div/ul')

    for li in dinnerDiv.find_elements(By.TAG_NAME, 'li'):
        plate = li.find_element(By.CLASS_NAME, 'print_name').text
        result['dinner'].append({
            'name': plate,
            'value': li.find_element(By.CLASS_NAME, 'amount_input').get_attribute('value')
        })

    snackDiv = browser.find_element(
        By.XPATH, '//*[@id="main_container"]/div/div[4]/div[1]/div[1]/div/div[3]/div/div[2]/div[3]/div/div/div[4]/div[3]/div/ul')

    for li in snackDiv.find_elements(By.TAG_NAME, 'li'):
        plate = li.find_element(By.CLASS_NAME, 'print_name').text
        result['snack'].append({
            'name': plate,
            'value': li.find_element(By.CLASS_NAME, 'amount_input').get_attribute('value')
        })

    return json.dumps(result)


print(getDietByCalories(sys.argv[1]))
