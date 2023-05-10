
/**

**/


create table public.school(
    id SERIAL Primary Key,
    name varchar(50),
    abbreviation varchar(10)
);

create table public.classes(
    id SERIAL Primary Key,
    name varchar(50),
    school_id int,
    foreign key (school_id) references school(id)
);

-- each school must have only one principle
create type staff as enum('Administrative', 'Management', 'Cleaning', 'Teaching');
create table public.school_staff(
    id SERIAL Primary Key,
    firstName varchar(50),
    lastName varchar(50),
    dateOfBirth timestamp,
    school_id int,
    staff_type staff,
    foreign key (school_id) references school(id)
)

create table public.school_principle(
    id SERIAL PRIMARY KEY,
    school_id int unique, 
    staff_id int,
    foreign key (school_id) references school(id),
    foreign key (staff_id) references school_staff(id)
)

