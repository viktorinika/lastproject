const baseUrl = 'https://student-js-test-site1.000webhostapp.com/front_0523/api/all_data.php';
const studentId = 4;

async function fetchApiData() {
    const url = new URL(baseUrl);
    url.searchParams.set('id_stud', studentId);

    return (await fetch(url)).json()
}

function getElementsByDataFieldName(dataFieldName) {
    return document.querySelectorAll(`[data-field=${dataFieldName}]`);
}

function putTextIntoTags(nodeList, text) {
    nodeList.forEach(element => {
        element.innerText = text;
    });
}

async function renderCard(studentData) {
    const preparedData = Object
        .keys(studentData)
        .forEach(key => {
            if (Array.isArray(studentData[key] && studentData[key].length > 0)) {
                if (typeof studentData[key] === 'string')
            } else {
                const nodeList = getElementsByDataFieldName(key);
                putTextIntoTags(nodeList, studentData[key]);
            }
        });
}

async function initApp() {
    const [studentData] = await fetchApiData();
    console.log(studentData);

    renderCard(studentData);
}

initApp();