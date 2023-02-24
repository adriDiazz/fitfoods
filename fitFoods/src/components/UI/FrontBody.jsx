import { useState } from 'react';
import style from './Body.module.css';

const FrontBody = () => {
	const [overName, setOverName] = useState('');
	const [tooltipStyles, setTooltipStyles] = useState({});

	const handleOver = (name, e) => {
		setOverName(name);
	};

	const handleLeave = () => {
		setOverName('');
		setTooltipStyles({
			position: 'absolute',
			display: 'none'
		});
	};

	const handleStilos = e => {
		if (overName !== '') {
			setTooltipStyles({
				position: 'absolute',
				display: 'block',
				background: '#D9D9D9',
				border: '1px solid black',
				borderRadius: '5px',
				padding: '5px',
				left: e.pageX + 10 + 'px',
				top: e.pageY + 10 + 'px'
			});
		}
	};

	return (
		<>
			<div style={tooltipStyles}>{overName}</div>
			<svg
				width='376'
				height='655'
				viewBox='0 0 376 655'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
			>
				{/* Legs */}
				<g>
					<path
						d='M262.158 496C260.158 478.4 257.325 469.333 256.158 467C252.158 465 248.825 459.5 247.658 457C238.058 456.6 234.992 465.5 234.658 470C233.858 471.2 225.325 472.5 221.158 473L218.658 469.5C218.258 476.7 220.825 505.167 222.158 518.5C223.358 530.1 233.658 558.333 238.658 571C239.858 574.2 239.158 593 238.658 602C235.858 609.2 235.158 616.333 235.158 619C235.158 621.4 238.825 627 240.658 629.5C241.858 631.5 242.158 636.333 242.158 638.5C244.158 650.9 249.658 653.333 252.158 653C260.158 655.4 273.825 650.667 279.658 648C281.258 646 280.325 641.833 279.658 640C275.258 637.2 269.825 627.5 267.658 623C266.458 617.8 260.492 602.5 257.658 595.5C256.458 589.9 263.825 555.833 267.658 539.5C269.658 519.9 264.825 502.333 262.158 496Z'
						fill='#D9D9D9'
						stroke='black'
					/>
					<path
						d='M113 496C115 478.4 117.833 469.333 119 467C123 465 126.333 459.5 127.5 457C137.1 456.6 140.167 465.5 140.5 470C141.3 471.2 149.833 472.5 154 473L156.5 469.5C156.9 476.7 154.333 505.167 153 518.5C151.8 530.1 141.5 558.333 136.5 571C135.3 574.2 136 593 136.5 602C139.3 609.2 140 616.333 140 619C140 621.4 136.333 627 134.5 629.5C133.3 631.5 133 636.333 133 638.5C131 650.9 125.5 653.333 123 653C115 655.4 101.333 650.667 95.5 648C93.9 646 94.8334 641.833 95.5 640C99.9 637.2 105.333 627.5 107.5 623C108.7 617.8 114.667 602.5 117.5 595.5C118.7 589.9 111.333 555.833 107.5 539.5C105.5 519.9 110.333 502.333 113 496Z'
						fill='#D9D9D9'
						stroke='black'
					/>
				</g>
				<g
					id='Front Calves'
					onMouseOver={e => handleOver('Front Calves', e)}
					onMouseLeave={() => handleLeave()}
					onMouseMove={e => handleStilos(e)}
					className={overName === 'Front Calves' ? style.over : style.noOver}
				>
					<path
						d='M257.702 467.5C258.535 491.5 259.402 541.1 256.202 547.5C252.702 556.667 246.102 577.5 247.702 587.5C246.869 588.667 245.002 590.3 244.202 587.5C244.035 569.667 243.102 533.2 240.702 530C238.702 521.167 234.002 502.1 231.202 496.5C227.23 489.052 219.313 473.124 219.203 468.594C219.203 468.562 219.202 468.531 219.202 468.5C219.202 468.531 219.202 468.562 219.203 468.594C219.372 482.132 220.106 510.716 221.702 517.5C223.369 526.333 227.602 545.6 231.202 552C234.369 558.333 240.702 573.2 240.702 582C241.702 584.667 244.102 590 245.702 590C246.035 590.167 247.502 590.7 248.702 589.5C250.202 588 263.702 546.5 268.202 541.5C269.389 534.5 269.95 516.3 264.702 501.5C264.035 495.333 261.702 479.9 257.702 467.5Z'
						stroke='black'
					/>
					<path
						d='M118.5 467.5C117.667 491.5 116.8 541.1 120 547.5C123.5 556.667 130.1 577.5 128.5 587.5C129.333 588.667 131.2 590.3 132 587.5C132.167 569.667 133.1 533.2 135.5 530C137.5 521.167 142.2 502.1 145 496.5C148.972 489.052 156.889 473.124 156.999 468.594C156.999 468.562 157 468.531 157 468.5C157 468.531 157 468.562 156.999 468.594C156.83 482.132 156.096 510.716 154.5 517.5C152.833 526.333 148.6 545.6 145 552C141.833 558.333 135.5 573.2 135.5 582C134.5 584.667 132.1 590 130.5 590C130.167 590.167 128.7 590.7 127.5 589.5C126 588 112.5 546.5 108 541.5C106.813 534.5 106.252 516.3 111.5 501.5C112.167 495.333 114.5 479.9 118.5 467.5Z'
						stroke='black'
					/>
				</g>
				<g
					id='Quats'
					onMouseOver={() => handleOver('Quats')}
					onMouseLeave={() => handleLeave()}
					onMouseMove={e => handleStilos(e)}
					className={overName === 'Quats' ? style.over : style.noOver}
				>
					<path
						d='M263.376 389C265.376 342.2 250.876 295.5 243.376 278L235.876 285C234.276 290.6 235.209 304.667 235.876 311C220.876 355 209.876 425.5 210.876 443.5C211.676 457.9 217.876 469.5 220.876 473.5C224.876 473.9 232.209 472 235.376 471C237.376 459.4 244.209 457.833 247.376 458.5C248.576 461.7 253.876 465.833 256.376 467.5C253.976 460.7 253.376 438 253.376 427.5C259.776 413.5 262.709 396 263.376 389Z'
						stroke='black'
					/>
					<path
						d='M112 389C110 342.2 124.5 295.5 132 278L139.5 285C141.1 290.6 140.167 304.667 139.5 311C154.5 355 165.5 425.5 164.5 443.5C163.7 457.9 157.5 469.5 154.5 473.5C150.5 473.9 143.167 472 140 471C138 459.4 131.167 457.833 128 458.5C126.8 461.7 121.5 465.833 119 467.5C121.4 460.7 122 438 122 427.5C115.6 413.5 112.667 396 112 389Z'
						stroke='black'
					/>
				</g>
				{/* Extra legs */}
				<g>
					<path
						d='M192.523 334.5C194.923 320.5 221.856 295.333 235.023 284.5C233.823 288.1 234.523 303.667 235.023 311C227.823 327.8 215.69 400.667 210.523 435C202.523 419.8 198.19 393.333 197.023 382C193.023 368.4 192.356 344.667 192.523 334.5Z'
						fill='#D9D9D9'
						stroke='black'
					/>
					<path
						d='M182 334.5C179.6 320.5 152.667 295.333 139.5 284.5C140.7 288.1 140 303.667 139.5 311C146.7 327.8 158.833 400.667 164 435C172 419.8 176.333 393.333 177.5 382C181.5 368.4 182.167 344.667 182 334.5Z'
						fill='#D9D9D9'
						stroke='black'
					/>
				</g>
				{/* Hands */}
				<g>
					<path
						d='M346 309.5L336 292C330.8 294 323.833 300.5 321 303.5C324.2 308.3 326.333 313.5 327 315.5C328.2 327.5 331.167 336.833 332.5 340C340.079 358 343 360.833 344.5 360C345.7 359.6 341 347 342 344C343.6 344.8 350.333 357.333 353.5 363.5C355.1 365.1 356.5 364.167 357 363.5C357.8 361.5 353.333 349.667 351 344C358.6 358.8 362.5 363.833 363.5 364.5C365.5 363.7 365.333 360.5 365 359C363.5 354.5 359.5 346.5 357.5 340.5C359.5 345.3 366 355.5 369.5 359C374 353 362.5 335 361.5 333.5C360.945 332.668 359 330.5 360 328L365 330C369.8 332.8 373.333 331.167 374.5 330C372.1 329.2 365.167 322.333 362 319C358.8 316.6 350 311.667 346 309.5Z'
						fill='#D9D9D9'
						stroke='black'
					/>
					<path
						d='M29.5 309L39.5 291.5C44.7 293.5 51.6667 300 54.5 303C51.3 307.8 49.1667 313 48.5 315C47.3 327 44.3333 336.333 43 339.5C35.4211 357.5 32.5 360.333 31 359.5C29.8 359.1 34.5 346.5 33.5 343.5C31.9 344.3 25.1667 356.833 22 363C20.4 364.6 19 363.667 18.5 363C17.7 361 22.1667 349.167 24.5 343.5C16.9 358.3 13 363.333 12 364C10 363.2 10.1667 360 10.5 358.5C12 354 16 346 18 340C16 344.8 9.5 355 6 358.5C1.5 352.5 13 334.5 14 333C14.5547 332.168 16.5 330 15.5 327.5L10.5 329.5C5.7 332.3 2.16667 330.667 1 329.5C3.4 328.7 10.3333 321.833 13.5 318.5C16.7 316.1 25.5 311.167 29.5 309Z'
						fill='#D9D9D9'
						stroke='black'
					/>
				</g>
				<g
					id='Abs'
					onMouseOver={() => handleOver('Abs')}
					onMouseLeave={() => handleLeave()}
					onMouseMove={e => handleStilos(e)}
					className={overName === 'Abs' ? style.over : style.noOver}
				>
					<path
						d='M187 329.5V259C198.6 261.4 211.833 258 217 256C216.6 276.4 208.5 303.167 204.5 314C202.9 318.4 199.833 323.167 198.5 325C195.3 328.6 189.5 329.5 187 329.5Z'
						stroke='black'
					/>
					<path
						d='M186.5 329V258.5C174.9 260.9 161.667 257.5 156.5 255.5C156.9 275.9 165 302.667 169 313.5C170.6 317.9 173.667 322.667 175 324.5C178.2 328.1 184 329 186.5 329Z'
						stroke='black'
					/>
					<path
						d='M187 259.5V233C200.2 237.4 215.833 234.833 222 233C222.4 237.8 218.833 250 217 255.5C215.8 257.1 204.5 259.833 199 261H191.5C189.1 261 187.5 260 187 259.5Z'
						stroke='black'
					/>
					<path
						d='M186.5 259V232.5C173.3 236.9 157.667 234.333 151.5 232.5C151.1 237.3 154.667 249.5 156.5 255C157.7 256.6 169 259.333 174.5 260.5H182C184.4 260.5 186 259.5 186.5 259Z'
						stroke='black'
					/>
					<path
						d='M187 232.5V204C188 201.5 209 208 210 208C210.8 208 218.667 205.333 222.5 204L222 232.5C220 234.1 216.167 235.167 214.5 235.5C213.3 235.9 198.333 235.333 191 235C189 234.2 187.5 233 187 232.5Z'
						stroke='black'
					/>
					<path
						d='M186.5 232.5V204C185.5 201.5 164.5 208 163.5 208C162.7 208 154.833 205.333 151 204L151.5 232.5C153.5 234.1 157.333 235.167 159 235.5C160.2 235.9 175.167 235.333 182.5 235C184.5 234.2 186 233 186.5 232.5Z'
						stroke='black'
					/>
					<path
						d='M187 172C188.2 172 192.167 171.667 194 171.5C198 173.9 213.333 175.833 220.5 176.5C222.1 177.7 222.5 195.333 222.5 204C220.1 206 212.833 207.833 209.5 208.5C207.9 208.5 201.167 206.833 198 206C194.4 205.2 189.167 204.667 187 204.5V172Z'
						stroke='black'
					/>
					<path
						d='M186.5 172C185.3 172 181.333 171.667 179.5 171.5C175.5 173.9 160.167 175.833 153 176.5C151.4 177.7 151 195.333 151 204C153.4 206 160.667 207.833 164 208.5C165.6 208.5 172.333 206.833 175.5 206C179.1 205.2 184.333 204.667 186.5 204.5V172Z'
						stroke='black'
					/>
				</g>
				<g
					id='Lats'
					onMouseOver={() => handleOver('Lats')}
					onMouseLeave={() => handleLeave()}
					onMouseMove={e => handleStilos(e)}
					className={overName === 'Lats' ? style.over : style.noOver}
				>
					<path
						d='M241.478 237.267C235.939 209.358 244.851 192.414 250 187.43C250 179.057 248.935 169.655 248.402 166C243.715 169.987 226.92 175.303 219.109 177.463C222.517 181.051 221.949 218.827 221.239 237.267C220.174 243.248 218.399 252.052 216.446 256.704C215.167 280.227 205.616 308.036 201 319C207.817 306.242 231.891 286.44 243.076 278.134C245.633 270.16 243.076 247.567 241.478 237.267Z'
						stroke='black'
					/>
					<path
						d='M133 237C138.2 209 129.833 192 125 187C125 178.6 126 169.167 126.5 165.5C130.9 169.5 146.667 174.833 154 177C150.8 180.6 151.333 218.5 152 237C153 243 154.667 251.833 156.5 256.5C157.7 280.1 166.667 308 171 319C164.6 306.2 142 286.333 131.5 278C129.1 270 131.5 247.333 133 237Z'
						stroke='black'
					/>
				</g>
				<g
					id='Front Forearms'
					onMouseOver={() => handleOver('Front Forearms')}
					onMouseLeave={() => handleLeave()}
					onMouseMove={e => handleStilos(e)}
					className={overName === 'Front Forearms' ? style.over : style.noOver}
				>
					<path
						d='M318.5 249C313.7 227.8 299.5 213.833 293 209.5C291.8 210.3 290.5 223.167 290 229.5C287.6 228.3 272.667 222.667 265.5 220C266.3 246 282.167 260.5 290 264.5C300.8 270.5 315.167 293.667 321 304.5C320.6 302.9 330.833 295.5 336 292C332 286 322.667 260.833 318.5 249Z'
						stroke='black'
					/>
					<path
						d='M57 249C61.8 227.8 76 213.833 82.5 209.5C83.7 210.3 85 223.167 85.5 229.5C87.9 228.3 102.833 222.667 110 220C109.2 246 93.3333 260.5 85.5 264.5C74.7 270.5 60.3333 293.667 54.5 304.5C54.9 302.9 44.6667 295.5 39.5 292C43.5 286 52.8333 260.833 57 249Z'
						stroke='black'
					/>
				</g>
				<g
					id='Biceps'
					onMouseOver={() => handleOver('Biceps')}
					onMouseLeave={() => handleLeave()}
					onMouseMove={e => handleStilos(e)}
					className={overName === 'Biceps' ? style.over : style.noOver}
				>
					<path
						d='M293.452 210.5C294.252 183.7 284.786 170.333 279.952 167C274.752 165.4 266.786 160.333 263.452 158H257.452C255.052 158.4 251.119 163.167 249.452 165.5C249.452 171.1 250.452 182.167 250.952 187C252.152 199 260.786 213.667 264.952 219.5C267.752 221.9 283.119 227.5 290.452 230C290.852 227.6 292.619 216 293.452 210.5Z'
						stroke='black'
					/>
					<path
						d='M82.5 210.5C81.7 183.7 91.1667 170.333 96 167C101.2 165.4 109.167 160.333 112.5 158H118.5C120.9 158.4 124.833 163.167 126.5 165.5C126.5 171.1 125.5 182.167 125 187C123.8 199 115.167 213.667 111 219.5C108.2 221.9 92.8333 227.5 85.5 230C85.1 227.6 83.3333 216 82.5 210.5Z'
						stroke='black'
					/>
				</g>
				{/* Extratorso */}
				<path
					d='M172 109.5C174 109.5 169.5 85.1667 167 73C180.667 72.5 207.9 72 207.5 74C207.1 76 202.667 99.1667 200.5 110.5L228 109.5L226.5 115.5L205.5 135L197.5 171.5C192.3 172.7 181.667 172 177 171.5L155 135L147 109.5H172Z'
					fill='#D9D9D9'
					stroke='black'
				/>
				<g
					id='Front Shoulders'
					onMouseOver={() => handleOver('Front Shoulders')}
					onMouseLeave={() => handleLeave()}
					onMouseMove={e => handleStilos(e)}
					className={overName === 'Front Shoulders' ? style.over : style.noOver}
				>
					<path
						d='M270.443 118C259.243 110 242.11 110 234.943 111H226.443L221.943 117C232.343 119.4 249.943 145 257.443 157.5H262.943C267.343 161.5 275.776 165.5 279.443 167C280.243 165.4 281.11 155 281.443 150C282.243 134 274.443 122 270.443 118Z'
						stroke='black'
					/>
					<path
						d='M105 118C116.2 110 133.333 110 140.5 111H149L153.5 117C143.1 119.4 125.5 145 118 157.5H112.5C108.1 161.5 99.6667 165.5 96 167C95.2 165.4 94.3333 155 94 150C93.2 134 101 122 105 118Z'
						stroke='black'
					/>
				</g>
				<g
					id='Chest'
					onMouseOver={() => handleOver('Chest')}
					onMouseLeave={() => handleLeave()}
					onMouseMove={e => handleStilos(e)}
					className={overName === 'Chest' ? style.over : style.noOver}
				>
					<path d='M192.675 135.5C199.475 123.1 214.175 118.333 220.675 117.5C232.275 117.5 249.842 144.167 257.175 157.5C249.575 167.9 231.675 174.167 223.675 176C202.075 176.4 192.342 170.833 190.175 168C189.375 159.6 191.509 142.833 192.675 135.5Z' />
					<path
						d='M226.675 111C225.175 113 221.875 117.1 220.675 117.5M220.675 117.5C214.175 118.333 199.475 123.1 192.675 135.5C191.509 142.833 189.375 159.6 190.175 168C192.342 170.833 202.075 176.4 223.675 176C231.675 174.167 249.575 167.9 257.175 157.5C249.842 144.167 232.275 117.5 220.675 117.5Z'
						stroke='black'
					/>
					<path d='M182.5 135.5C175.7 123.1 161 118.333 154.5 117.5C142.9 117.5 125.333 144.167 118 157.5C125.6 167.9 143.5 174.167 151.5 176C173.1 176.4 182.833 170.833 185 168C185.8 159.6 183.667 142.833 182.5 135.5Z' />
					<path
						d='M148.5 111C150 113 153.3 117.1 154.5 117.5M154.5 117.5C161 118.333 175.7 123.1 182.5 135.5C183.667 142.833 185.8 159.6 185 168C182.833 170.833 173.1 176.4 151.5 176C143.5 174.167 125.6 167.9 118 157.5C125.333 144.167 142.9 117.5 154.5 117.5Z'
						stroke='black'
					/>
				</g>
				<g
					id='Front Traps'
					onMouseOver={() => handleOver('Front Traps')}
					onMouseLeave={() => handleLeave()}
					onMouseMove={e => handleStilos(e)}
					className={overName === 'Front Traps' ? style.over : style.noOver}
				>
					<path
						d='M194 118.5C200.8 104.9 205.833 83.8333 207.5 75C205.9 96.2 225.167 107.833 235 111C220.2 109.4 201.5 115.333 194 118.5Z'
						stroke='black'
					/>
					<path
						d='M181 118.5C174.2 104.9 169.167 83.8333 167.5 75C169.1 96.2 149.833 107.833 140 111C154.8 109.4 173.5 115.333 181 118.5Z'
						stroke='black'
					/>
				</g>
				{/* Head */}
				<path
					d='M159 30.5C159.4 7.7 178.5 1.33333 188 1C208.4 1 215.833 20.6667 217 30.5C215 42.9 210.833 65.3333 209 75C204.6 81.8 193.167 83.1667 188 83C177 84 170 78.5 168 75C166.931 73.1297 161.167 45 159 30.5Z'
					fill='#D9D9D9'
					stroke='black'
				/>
			</svg>
		</>
	);
};

export default FrontBody;
