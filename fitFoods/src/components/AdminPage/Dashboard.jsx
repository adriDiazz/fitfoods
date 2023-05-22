import style from './Dashboard.module.css'
import { AreaChart, BarChart } from '@tremor/react'
const chartdata = [
	{
		date: 'Jan 22',
		SemiAnalysis: 2890,
		'The Pragmatic Engineer': 2338
	},
	{
		date: 'Feb 22',
		SemiAnalysis: 2756,
		'The Pragmatic Engineer': 2103
	},
	{
		date: 'Mar 22',
		SemiAnalysis: 3322,
		'The Pragmatic Engineer': 2194
	},
	{
		date: 'Apr 22',
		SemiAnalysis: 3470,
		'The Pragmatic Engineer': 2108
	},
	{
		date: 'May 22',
		SemiAnalysis: 3475,
		'The Pragmatic Engineer': 1812
	},
	{
		date: 'Jun 22',
		SemiAnalysis: 3129,
		'The Pragmatic Engineer': 1726
	}
];

const chartdata2 = [
    {
      name: "Amphibians",
      "Number of threatened species": 2488,
    },
    {
      name: "Birds",
      "Number of threatened species": 1445,
    },
    {
      name: "Crustaceans",
      "Number of threatened species": 743,
    },
  ];

const dataFormatter = number => {
	return '$ ' + Intl.NumberFormat('us').format(number).toString();
};

const Dashboard = () => {
  return (
    <div className={style.wrapper}>
       <AreaChart
				data={chartdata}
				index='date'
				categories={['SemiAnalysis', 'The Pragmatic Engineer']}
				colors={['indigo', 'cyan']}
				valueFormatter={dataFormatter}
		/>

        <BarChart
             data={chartdata2}
             index="name"
             categories={["Number of threatened species"]}
             colors={["blue"]}
             valueFormatter={dataFormatter}
             yAxisWidth={48}
        />
    </div>
  )
}

export default Dashboard
