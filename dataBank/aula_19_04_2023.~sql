create table Venda (
id_venda integer,
produto_venda varchar2(20),
valor_unitario number(7,2),
quantidade_produto integer,
data_pagamento date,
quantidade_parcela integer
)
insert into Venda values (1, 'Amaciante', 17.89, 2, '17-04-2023', 1);
insert into Venda values (2, 'Maçã', 2.19, 7, '11-03-2023', 1);
insert into Venda values (3, 'Ovo de Páscoa', 170.89, 1, '11-04-2023', 4);
insert into Venda values (4, 'Presunto fatiado', 15.49, 3, '19-04-2023', 1);
insert into Venda values (5, 'Pãozinho', 1.99, 20, '02-03-2023', 1);
select id_venda, quantidade_produto * valor_unitario as valor_total from Venda;
select id_venda, quantidade_produto * valor_unitario / quantidade_parcela as valor_parcela from Venda;
select sum(quantidade_produto * valor_unitario) as valor_total_total from Venda;
select avg(quantidade_produto * valor_unitario) as media_valor_total from Venda;
select * from Venda;
delete Venda where id_venda = 2;
alter table Venda modify valor_unitario decimal(7,2);
select * from Venda where quantidade_produto * valor_unitario > 40;
create table Cliente (
cliente_id integer,
cliente_nome varchar(50),
cliente_end varchar(50),
cliente_end_cidade varchar(20),
cliente_end_cep varchar(9),
cliente_telefone varchar(14),
cliente_perc_desconto number(4,2),
estado_codigo char(2),
primary key (cliente_id)
);
alter table Cliente add constraint estado_fk foreign key (estado_codigo) references Estado (estado_codigo);

create table Estado (
estado_codigo char(2),
estado_nome varchar(25),
primary key (estado_codigo)
);

create table Ue_Produto (
ue_produto_cod char(3),
ue_produto_descr varchar(50),
primary key (ue_produto_cod)
);

create table Produto (
produto_codigo integer,
produto_nome varchar(40),
produto_preco number(5,2),
ue_produto_cod char(3),
primary key (produto_codigo)
);
alter table Produto add constraint ue_produto_fk foreign key (ue_produto_cod) references Ue_Produto (ue_produto_cod);

create table Pedido (
pedido_identificacao integer,
pedido_tipo varchar(30),
pedido_data_entrada date,
pedido_valor_total decimal(7,2),
pedido_desconto decimal(7,2),
pedido_dt_embarque date,
cliente_id integer,
primary key (pedido_identificacao)
);
alter table Pedido add constraint cliente_fk foreign key (cliente_id) references Cliente (cliente_id);

create table Item (
item_quantidade integer,
item_valor_unitario number(5,2),
item_valor_total number(5,2),
pedido_identificacao integer,
produto_codigo integer
);
alter table Item add constraint pedido_fk foreign key (pedido_identificacao) references Pedido (pedido_identificacao);
alter table Item add constraint produto_fk foreign key (produto_codigo) references Produto (produto_codigo);

create table Produto_CC_6A (
produto_cc_6a_codigo char(2),
produto_cc_6a_nome varchar(40),
produto_cc_6a_preco decimal(5,2),
ue_produto_cc_6a_codigo char(3),
primary key (produto_cc_6a_codigo)
);
alter table Produto_CC_6A add constraint ue_produto_cc_6a_fk foreign key (ue_produto_cc_6a_codigo) references Ue_Produto_CC_6A (ue_produto_cc_6a_codigo);

create table Ue_Produto_CC_6A (
ue_produto_cc_6a_codigo char(3) not null,
ue_produto_cc_6a_descr varchar(50),
primary key (ue_produto_cc_6a_codigo)
);

create unique index indice_produto_nome on Produto_CC_6A (produto_cc_6a_nome);
alter table Ue_Produto_CC_6A modify ue_produto_cc_6a_codigo char(3);

insert into Ue_Produto_CC_6A values (1, 'AAAdADNIHADAJIDKHIMCNADGKAMUhxkjbhcdnav
hjdvGHJKJN');
select ue_produto_cc_6a_codigo, ue_produto_cc_6a_descr from Ue_Produto_CC_6A;

insert into Produto_CC_6A (produto_cc_6a_codigo, ue_produto_cc_6a_codigo) values ('11', '1');
insert into Ue_Produto values (123, 'ahdkmklahxkdlmXHDKL|heNHgfulkidmhngkvcgf');
insert into Produto values (145, 'Farinha', 13.00, '123');
insert into Produto_CC_6A (produto_cc_6a_codigo, ue_produto_cc_6a_codigo) values (13, '1');

delete from Produto_CC_6A;

insert into Ue_Produto_CC_6A values ('123', 'jkandnjkmajxdhjbahjkmcdkjabhkjcma');
alter table Produto_CC_6A modify produto_cc_6a_codigo char(3);
insert into Produto_CC_6A (produto_cc_6a_nome, produto_cc_6a_preco, produto_cc_6a_codigo, ue_produto_cc_6a_codigo) select produto_nome, produto_preco, produto_codigo, ue_produto_cod from Produto;

update Produto_CC_6A set produto_cc_6a_preco = 12 where produto_cc_6a_preco < 10;
update Produto_CC_6A set produto_cc_6a_preco = produto_cc_6a_preco * 1.5 where produto_cc_6a_preco < 10;
update Produto_CC_6A set produto_cc_6a_nome = 'Feijão Preto e Branco' where produto_cc_6a_codigo = 3;
update Produto_CC_6A set produto_cc_6a_preco = produto_cc_6a_preco * 0.6 where ue_produto_cc_6a_codigo = 5;
update Ue_Produto_CC_6A set ue_produto_cc_6a_descr = 'Inutilizado' where ue_produto_cc_6a_codigo not in (select distinct ue_produto_cc_6a_codigo from Produto_CC_6A);

delete from Produto_CC_6A where ue_produto_cc_6a_codigo = 20;
delete from Produto_CC_6A where ue_produto_cc_6a_codigo in (select ue_produto_cc_6a_codigo from Ue_Produto_CC_6A where ue_produto_cc_6a_descr = 'Litro');

select * from Cliente;
select produto_nome from Produto;
select distinct cliente_end_cidade, estado_codigo, cliente_end_cep from Cliente;
select * from Pedido where cliente_id = 09 and pedido_valor_total > 50.0;
select * from Pedido where pedido_valor_total < 100 or pedido_valor_total > 500;
select * from Pedido where pedido_data_entrada = '99/12/04';
select * from Pedido where (pedido_valor_total between 20 and 50) and pedido_data_entrada = '99/12/02';
select * from Pedido where pedido_valor_total > 20 and pedido_valor_total < 50 and pedido_data_entrada = '99/12/02';
select * from Cliente where cliente_id not between 5 and 25;
select * from Cliente where cliente_id > 25 or cliente_id < 5;
select * from Produto where produto_nome like 'P%';
select * from Produto where produto_nome like '%an%';
select * from Produto where produto_nome like 'C%' or produto_nome like 'F%' or produto_nome like 'M%';
select * from Produto where produto_nome like 'ma______';
select * from Produto where produto_nome like 'ma%' and length (produto_nome) = 8;
select * from Produto where produto_nome like '__ACA__';
select * from Produto where produto_nome like '%a_p%';
select * from Cliente where estado_codigo = 'MG' or estado_codigo = 'ES';
select * from Cliente where estado_codigo in ('MG', 'ES');
select * from Cliente where estado_codigo <> 'RJ' and estado_codigo <> 'SP';
select * from Cliente where estado_codigo not in ('RJ', 'SP');
select * from Produto where produto_preco < 20 and ue_produto_cod in (select ue_produto_cod from ue_produto where ue_produto_descr = 'kilograma' or ue_produto_descr = 'litro');
select * from Produto where produto_preco > 10 and (ue_produto_codigo = 'KG' or ue_produto_codigo = 'UM');
select * from Produto where produto_preco < 5 or produto_preco is null;
