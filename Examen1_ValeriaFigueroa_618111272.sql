Create database Mercadito

create table Inventario (
id int, 
idProducto int, 
tipoPrecio int
constraint fkIdProducto foreign key(IdProducto) references productos(id),
constraint fkTPrecio foreign key(tipoPrecio) references TipoPrecios(id),
)

create table productos(
id int primary key identity(1,1),
Nombre varchar(20),
idPrecio int,
proveedor int,
cantidad int
constraint fkProveedor foreign key(proveedor) references proveedores(id)
)

alter table productos add cantidad int


create table proveedores(
id int primary key identity(1,1),
nombre varchar(20),
idVenta int
constraint fkIdVenta foreign key(idVenta) references ventas(id)
)

--Normalización

create table TipoPrecios (
id int primary key identity (1,1),
tipoPrecio varchar(20)
)

create table ventas (
id int primary key identity (1,1),
venta varchar(20)
)

insert into productos values ('semitas', 2, 2, 4);
insert into productos values ('maseca', 10, 6, 3);
insert into productos values ('aceite', 12, 5, 5);
insert into productos values ('spaguetti', 10, 1, 4);
insert into productos values ('jabon ropa', 5, 4, 2);
insert into productos values ('jabon trastes', 5, 7, 6);
insert into productos values ('churros', 3, 9, 4);
insert into productos values ('manteca', 10, 7, 2);
insert into productos values ('harina', 10, 2, 3);
insert into productos values ('galletas', 2, 3, 7);
insert into productos values ('leche', 2, 3, 5);

select * from productos

insert into ventas values ('inmediata');
insert into ventas values ('por orden');

select * from ventas

insert into proveedores values ('imsa', 1);
insert into proveedores values ('boca deli', 2);
insert into proveedores values ('pepsi', 1);
insert into proveedores values ('coca cola', 1);
insert into proveedores values ('panaderos', 2);
insert into proveedores values ('sula', 2);
insert into proveedores values ('leyde', 2);
insert into proveedores values ('carnicerias', 1);
insert into proveedores values ('bodegas', 2);

select * from proveedores

insert into TipoPrecios values ('proveedor')
insert into TipoPrecios values ('dueño')

select * from TipoPrecios

insert into Inventario values (11, 2, 1)
insert into Inventario values (2, 5, 1)
insert into Inventario values (7, 20, 2)
insert into Inventario values (9, 4, 1)
insert into Inventario values (10, 5, 1)
insert into Inventario values (5, 7, 2)
insert into Inventario values (6, 12, 2)

select * from Inventario

create table clientes (
	id int primary key identity (1, 1),
	Nombre varchar(20),
	Saldo int
);

insert into clientes values ('Maria', 150)
insert into clientes values ('Jose', 100)
insert into clientes values ('carmen', 50)
insert into clientes values ('Miriam', 200)
insert into clientes values ('juan', 300)
insert into clientes values ('lucia', 150)
insert into clientes values ('marcia', 150)

select * from clientes


create table Deuda(
	id int primary key identity (1, 1),
	idCliente int,
	deuda float not null,
	fdeuda date null default getdate(),
	abonos float
	constraint fkidCliente foreign key(idCliente) references clientes(id),
	
);


insert into Deuda values (1, 150.50, default , 100)
insert into Deuda values (2, 200, default, 50)
insert into Deuda values (3, 400, default, 200)

select * from Deuda

create table caja(
	id int primary key identity (1, 1),
	fecha date null default getdate(),
	saldoInicial float,
	saldoFinal float,
	idFactura int, 
	constraint fkIdFactura foreign key(IdFactura) references factura(id)
)

insert into caja values (default, 200.5, 400, 5)
insert into caja values (default, 400, 600, 6)
insert into caja values (default, 100, 200, 7)
insert into caja values (default, 200, 400, 8)

select * from caja

create table factura (
	id int primary key identity (1,1),
	idCliente int,
	fecha date null default getdate(),
	idDetalle int,
	constraint fkIdDetalle foreign key(IdDetalle) references detalleFac(id),
	constraint fkIdClient foreign key(idCliente) references Clientes(id)
)

insert into factura values (1, default, 1)
insert into factura values (4, default, 2)
insert into factura values (2, default, 3)
insert into factura values (6, default, 4)

select * from factura

create table detalleFac (
	id int primary key identity(1,1),
	idFactura int,
	idProductos int
	constraint fkIdClientes foreign key(idProductos) references productos(id)
)




insert into detalleFac values (1, 1)
insert into detalleFac values (1, 5)
insert into detalleFac values (1, 8)
insert into detalleFac values (2, 8)
insert into detalleFac values (2, 5)
insert into detalleFac values (2, 6)
insert into detalleFac values (1, 7)

select * from detalleFac 

create table Compras (
id int primary key identity (1,1),
pedidoProv int,
idProducto int,
cantidad int,
costo int,
precioSugerido float
constraint fkIdProductos foreign key(idProducto) references productos(id),
constraint fkPedidoProv foreign key(pedidoProv) references pedidosProv(id),
)

insert into Compras values (1, 1, 5, 10, 12)
insert into Compras values (2, 2, 10, 5, 8)
insert into Compras values (4, 3, 12, 2, 3)
insert into Compras values (3, 4, 8, 10, 11)
insert into Compras values (5, 5, 20, 2, 4)
insert into Compras values (6, 6, 10, 15, 20)

select * from Compras

create table pedidosProv(
id int primary key identity(1,1),
idProveedor int,
fechaPedido date default getdate(),
fechaEntrega date
constraint fkIdProveedor foreign key(idProveedor) references proveedores(id)
)

insert into pedidosProv values (1, default, '2/12/2020')
insert into pedidosProv values (2, default, '5/12/2020')
insert into pedidosProv values (3, default, '4/12/2020')
insert into pedidosProv values (4, default, '12/12/2020')
insert into pedidosProv values (5, default, '22/12/2020')
insert into pedidosProv values (6, default, '20/12/2020')

select * from pedidosProv




go

create view vTransaccionF as
select f.idCliente, c.id , c.Nombre, f.fecha 
from dbo.factura f, dbo.clientes c
where c.id = f.idCliente;

drop view vTransaccionF

select * from vTransaccionF

go
go

create view vTransaccionC as
select c.idProducto, c.cantidad, c.costo, pd.idProveedor, p.id, p.nombre
from dbo.Compras c, dbo.pedidosProv pd, dbo.proveedores p
where pd.idProveedor = p.id;

 select * from vTransaccionC

 drop view vTransaccionC;

 go

/* CREATE PROCEDURE spProveedores as

 BEGIN
 create table #tipoProveedores(id int, tipo varchar(20))

 declare @id int, @tipo int, @pedidoId int, @idC int, @cant int, @nombre varchar(25), @idProv int, @idP int

 declare CProv cursor for
 select pedidoProv = @pedidoId, cantidad = @cant from Compras

 declare Pedid_Prov cursor for
 select  id = @idC, idProveedor = @idProv from pedidosProv

 declare prov cursor for
 select nombre = @nombre, id=@idP from proveedores

 open CProv
 open Pedid_Prov
 open prov

 fetch next from Cprov into @pedidoId,@cant
 fetch next from Pedid_Prov into @idC,@idProv
 fetch next from prov into @nombre,@idP

 while @pedidoId = @idC 
 begin
		if(@cant>=5 and (@idProv = @idP))
		insert into #tipoProveedores values(1, @pedidoId)

		 fetch next from Cprov into @pedidoId,@cant
		 fetch next from Pedid_Prov into @idC,@idProv
		 fetch next from prov into @nombre,@idP

end
close CProv
close Pedid_Prov
close prov

SP_Proveedores
  */

 go
CREATE TRIGGER trgProducto_insert
on Compras
AFTER
INSERT
as
BEGIN

declare @idProductos int, @cantidad int

update p set p.cantidad = p.cantidad + @cantidad
from productos as p inner join
inserted as C on @idProductos = p.id

--update
--delete
--select * from factura f
--inner join detalleFactura df on f.id=df.facturaId
END
go 


create view vTipoPrecios as
select i.idProducto, p.id, p.tipoPrecio
from dbo.Inventario i, dbo.TipoPrecios p

select * from vTipoPrecios

drop view vTipoPrecios
