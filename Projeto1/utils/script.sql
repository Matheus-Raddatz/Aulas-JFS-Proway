create table tb_contatos(
    id serial primary key,
    nome varchar(50),
    email varchar(100)
);

insert into tb_contatos (nome, email) values ('Maria', 'maria@gmail.com');
insert into tb_contatos (nome, email) values ('José', 'jose@gmail.com');

create table tb_users(
	id serial primary key,
	nome varchar(50),
	email varchar(100),
	senha varchar(500),
	perfil varchar(10)
)