components hierarchy (Top...bottom)
1. Table (props: id, isLoading, style)
    1.1 Columns (style, id)
    1.2 Rows (style,id)
        1.2.3 Cells (value, style, id)
    1.3 Selections (map<Cell>[], id , style)

empty cells and simple values in HTML collection
cells with functions in array

Problems
1. create table template
2. create table from DB
3. change table by click

Requirements
1. create a table by the template, for example: 10*10
2. after table is created, every cell should contain data in localStorage.
3. you can make operations between cells