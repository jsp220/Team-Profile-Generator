const teamHtml = team => {
    const managerHtml = person => {
        return ` 
            <div class="card rounded shadow m-2 p-0 col-5 col-sm-4 col-lg-3 col-xl-2">
                <div class="card-header bg-primary text-light">
                    <h2 class="h4 text-center font-weight-bold">${person.getName()}</h2>
                    <h2 class="h4 text-center">${person.getRole()}</h2>
                </div>
                <div class="card-body py-4 gray">
                    <ul class="list-group rounded list-group-flush">
                        <li class="list-group-item">Employee ID: ${person.getId()}</li>
                        <li class="list-group-item">
                            Email: <a href="mailto:${person.getEmail()}">${person.getEmail()}</a>
                        </li>
                        <li class="list-group-item">Office: ${person.getOfficeNumber()}</li>
                    </ul>
                </div>
            </div>`;
    }

    const engineerHtml = person => {
        return `
            <div class="card rounded shadow m-2 p-0 col-5 col-sm-4 col-lg-3 col-xl-2">
                <div class="card-header bg-primary text-light">
                    <h2 class="h4 text-center font-weight-bold">${person.getName()}</h2>
                    <h2 class="h4 text-center">${person.getRole()}</h2>
                </div>
                <div class="card-body py-4 gray">
                    <ul class="list-group rounded list-group-flush">
                        <li class="list-group-item">Employee ID: ${person.getId()}</li>
                        <li class="list-group-item">
                            Email: <a href="mailto:${person.getEmail()}">${person.getEmail()}</a>
                        </li>
                        <li class="list-group-item">
                            GitHub: <a target="_blank" href="https://github.com/${person.getGithub()}">${person.getGithub()}</a>
                        </li>
                    </ul>
                </div>
            </div>`;
    }

    const internHtml = person => {
        return `
            <div class="card rounded shadow m-2 p-0 col-5 col-sm-4 col-lg-3 col-xl-2">
                <div class="card-header bg-primary text-light">
                    <h2 class="h4 text-center font-weight-bold">${person.getName()}</h2>
                    <h2 class="h4 text-center">${person.getRole()}</h2>
                </div>
                <div class="card-body py-4 gray">
                    <ul class="list-group rounded list-group-flush">
                        <li class="list-group-item">Employee ID: ${person.getId()}</li>
                        <li class="list-group-item">
                            Email: <a href="mailto:${person.getEmail()}">${person.getEmail()}</a>
                        </li>
                        <li class="list-group-item">School: ${person.getSchool()}</a>
                    </ul>
                </div>
            </div>`;
    }

    let htmlContent = [];

    const htmlTeam = team.map(employee => {
        switch(employee.getRole()) {
            case "Manager":
                return managerHtml(employee);
                break;
            case "Engineer":
                return engineerHtml(employee);
                break;
            case "Intern":
                return internHtml(employee);
                break;
            default:
                return;
        }
    })

    return htmlTeam.join("");
}

module.exports = team => {
    return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link 
        rel="stylesheet" 
        href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css" 
        integrity="sha384-xOolHFLEh07PJGoPkLv1IbcEPTNtaed2xpHsD9ESMhqIYd0nLMwNLD69Npy4HI+N" 
        crossorigin="anonymous"
    />
    <link rel="stylesheet" href="./style.css" />
    <title>Team</title>
</head>

<body>
    <header class="jumbotron jumbotron-fluid">
        <div class="container">
            <h1 class="h3 text-center font-weight-bold">My Team</h1>
        </div>
    </header>

    <main>
        <section class="row justify-content-center">${teamHtml(team)}
        </section>
    </main>        
</body>
</html>
    `;
}