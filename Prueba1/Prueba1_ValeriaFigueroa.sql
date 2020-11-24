Create database Mercadito

create table Inventario (
Id_Producto int, 
nombreProducto varchar(20), 
cantidad int, 
tipoPrecio int)

create table productos(
Id_producto int primary key identity(1, 1),
Nombre varchar(20),
tipoPrecio int,
proveedor int 
)

create table proveedores(
Id_proveedor int primary key identity(1,1),
nombre varchar(20),
idVenta int
)

--Normalización

create table TipoPrecios (
idPrecio int primary key identity (1,1),
tipoPrecio varchar(20)
)

create table ventas (
idVenta int primary key identity (1,1),
venta varchar(20)
)

insert into productos values ('semitas', 2, 2);
insert into productos values ('maseca', 10, 6);
insert into productos values ('aceite', 12, 5);
insert into productos values ('spaguetti', 10, 1);
insert into productos values ('jabon ropa', 5, 4);
insert into productos values ('jabon trastes', 5, 7);
insert into productos values ('churros', 3, 9);
insert into productos values ('manteca', 10, 7);
insert into productos values ('harina', 10, 2);
insert into productos values ('galletas', 2, 3);

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

select * from Precios

insert into Inventario values (11, 'semitas', 12, 2)
insert into Inventario values (2, 'maseca', 5, 1)
insert into Inventario values (7, 'churros', 20, 2)
insert into Inventario values (9, 'harina', 4, 1)
insert into Inventario values (10, 'galletas', 5, 1)
insert into Inventario values (5, 'jabon ropa', 7, 2)
insert into Inventario values (6, 'jabon trastes', 12, 2)

select * from Inventario

create table clientes (
	id_Cliente int primary key identity (1, 1),
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


create table Deuda(
	id_deuda int primary key identity (1, 1),
	id_cliente int,
	deuda float not null,
	f_deuda datetime,
	abonos float
);


insert into Deuda values (1, 150.50, 23/11/2020, 100)
insert into Deuda values (2, 200, 23/11/2020, 50)
insert into Deuda values (3, 400, 23/11/2020, 200)

select * from Deuda

create table caja(
	id_caja int primary key identity (1, 1),
	fecha datetime,
	saldoInicial float,
	saldoFinal float,
	idfactura int 
)

insert into caja values (23/11/2020, 200, 400, 1)
insert into caja values (22/11/2020, 400, 600, 2)
insert into caja values (21/11/2020, 100, 200, 3)
insert into caja values (20/11/2020, 200, 400, 4)

select * from caja

create table factura (
	idFactura int primary key identity (1,1),
	id_Cliente int,
	fecha datetime,
	id_detalle int
)

insert into factura values (1, 23/11/2020, 1)
insert into factura values (4, 23/11/2020, 2)
insert into factura values (2, 23/11/2020, 3)
insert into factura values (6, 23/11/2020, 4)

select * from factura

create table detalleFac (
	id_detalle int,
	idFactura int,
	idProductos int,
)

insert into detalleFac values (1, 1, 4)
insert into detalleFac values (2, 2, 6)
insert into detalleFac values (3, 4, 7)
insert into detalleFac values (4, 3, 1)

select * from detalleFac