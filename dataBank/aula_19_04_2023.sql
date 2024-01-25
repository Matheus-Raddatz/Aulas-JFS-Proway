create table Produto ( produto_codigo integer, produto_nome varchar2(40), produto_preco number(5,2), ue_produto_cod char(3) );
insert into Produto values (321, 'Macarrão', 17.89, 123);
insert into Produto values (142, 'Arroz', 11.99, 123);
alter table Produto modify produto_nome varchar2(41);
select * from Produto where produto_codigo < 200;
select * from Produto order by produto_nome asc;
delete from Produto where produto_codigo > 100;
