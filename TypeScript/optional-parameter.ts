function show_details(id: number, name: string, email?: string): void {

    console.log("ID:", id);
    console.log("Name:", name);

    if (email !== undefined) {
        console.log("Email:", email);
    }

    console.log("----------------");
}

show_details(101, "Prasanna");
show_details(102, "Prasanna Venkatesh", "venk123@gmail.com");