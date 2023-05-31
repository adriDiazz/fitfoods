import { useEffect, useState } from 'react';
import { useFetch } from '../../hooks/useFetch';
import style from './Users.module.css';
import {
	Card,
	Table,
	TableHead,
	TableRow,
	TableHeaderCell,
	TableBody,
	TableCell,
	Text,
	Title,
	Badge
} from '@tremor/react';

import { getAllUsers, updateAdminToUser } from '../../utils/adminServices';
import Button from '../UI/Button';

const Users = () => {
	const [users, setUsers] = useState(null);

	console.log(users);

	useEffect(() => {
		getAllUsers(setUsers);
	}, []);

	return (
		<div>
			<Table className={style.table}  >
				<TableHead>
					<TableRow>
						<TableHeaderCell>Name</TableHeaderCell>
						<TableHeaderCell></TableHeaderCell>
						<TableHeaderCell>Email</TableHeaderCell>
						<TableHeaderCell>Admin</TableHeaderCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{users &&
						users.map(item => (
							<TableRow key={item.id}>
								<TableCell>{item.username}</TableCell>
								<TableCell>
									<Text>{<p>{users.email}</p>}</Text>
								</TableCell>
								<TableCell>
									<Text>{item.email}</Text>
								</TableCell>
								<TableCell>
									<Button onClick={() => {
                                        
                                            updateAdminToUser(item.id, setUsers)
                                        
                                    }}>
										{item.type === 1 ? 'Remove Admin' : 'Make Admin'}
									</Button>
								</TableCell>

                                <TableCell>
									<Badge onClick={() => {
                                        
                                            
                                        
                                    }} color='red'>
										Delete user
									</Badge>
								</TableCell>
							</TableRow>
						))}
				</TableBody>
			</Table>
		</div>
	);
};

export default Users;
