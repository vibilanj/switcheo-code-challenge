create table if not exists balances (
	id serial primary key,
	address varchar,
	denom varchar, 
	amount bigint, 
	block_height int
);

insert into balances (address, denom, amount, block_height) 
values 
('0xabab', 'usdc', 50000000000000, 733755),
('0x99cc', 'swth', -20000000, 733757),
('0xabab', 'usdc', -50000000000, 733855);

create table if not exists trades (
	id serial primary key,
	address varchar, 
	denom varchar, 
	amount bigint, 
	block_height int
);

insert into trades (address, denom, amount, block_height) 
values 
('0xabab', 'swth', 400000000000, 733756),
('0x99cc', 'usdc', 3500000000000, 733757),
('0x67f3', 'swth', 72000000000000, 733758);

select balances.address
from balances 
inner join trades on balances.address = trades.address
where trades.block_height > 730000
group by balances.address
having sum (
case balances.denom
	when 'usdc' then 0.000001 * balances.amount 
	when 'swth' then 0.00000005 * balances.amount 
	when 'tmx' then 0.003 * balances.amount 
end) >= 500;