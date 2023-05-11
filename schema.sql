
/**

**/


create table public.school(
    id SERIAL Primary Key,
    name varchar(50) NOT NULL,
    abbreviation varchar(10) NOT NULL
);

create table public.classes(
    id SERIAL Primary Key,
    name varchar(50) NOT NULL,
    school_id int NOT NULL,
    foreign key (school_id) references school(id)
);
alter table public.classes ALTER column "name"  set NOT null;

-- each school must have only one principle
create type staff as enum('Administrative', 'Management', 'Cleaning', 'Teaching');
create table public.school_staff(
    id SERIAL Primary Key,
    firstName varchar(50) NOT NULL,
    lastName varchar(50) NOT NULL,
    dateOfBirth timestamp NOT NULL,
    school_id int NOT NULL,
    staff_type staff NOT NULL,
    foreign key (school_id) references school(id)
)

create table public.school_principle(
    id SERIAL PRIMARY KEY,
    school_id int unique NOT NULL, 
    staff_id int NOT NULL,
    foreign key (school_id) references school(id),
    foreign key (staff_id) references school_staff(id)
)

