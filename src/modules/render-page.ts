import * as el from './create-element'

export let pageGarage = 1;



export async function renderPageGarage (n: number) {
    let response = await fetch(`http://127.0.0.1:3000/garage?_page=${n}&_limit=7`);
    let result: el.IarrValue[] = await response.json();

    el.h1.innerText = `Garage (${response.headers.get("X-Total-Count")})`;
    el.h2.innerText = `Page (${n})`;
 
    document.body.append(el.divBtnContainer, el.createInputContainer('Create'), el.h1, el.h2, el.createCar(result) )

}




