import { renderPageGarage } from './render-page';
import { pageGarage } from './render-page';
// import * as an from './animation';

export interface IAnimate {
    duration: number,
    draw: Function,
    timing: Function
}







export interface IarrValue {
    name: string,
    color: string,
    id: number
}

function createEl<T>(tagName: string,) {
    const tag = <T>document.createElement(tagName);
    return tag;
}

export const divBtnContainer = createEl<HTMLDivElement>('div');
// divBtnContainer.setAttribute('class', 'divBtnContainer');
const btnGarage = createEl<HTMLButtonElement>('button');

// btnGarage.setAttribute('id', 'btnGarage');
btnGarage.innerText = 'Garage';
const btnWinners = createEl<HTMLButtonElement>('button');
// btnWinners.setAttribute('id', 'btnWinners');
btnWinners.innerText = 'Winners';
divBtnContainer.append(btnGarage, btnWinners);

export function createInputContainer(text: string, id?: string) {
    const inputContainer = createEl<HTMLDivElement>('div');
    inputContainer.setAttribute('class', 'inputContainer');
    const inputName = createEl<HTMLInputElement>('input');
    inputName.setAttribute('type', 'text');
    const inputColor = createEl<HTMLInputElement>('input');
    inputColor.setAttribute('type', 'color');
    if (id) {
        inputName.setAttribute('id', `name${id}`);
        inputColor.setAttribute('id', `color${id}`);
    }
    const btnCreate = createEl<HTMLButtonElement>('button');
    btnCreate.setAttribute('id', 'btnCreate');
    btnCreate.innerText = `${text}`;
    inputContainer.append(inputName, inputColor, btnCreate);
    return inputContainer;
}


export const h1 = createEl<HTMLHeadingElement>('h1');
export const h2 = createEl<HTMLHeadingElement>('h2');

export function createCar(value: IarrValue[]) {

    const divTrackField = createEl<HTMLDivElement>('div');
    divTrackField.setAttribute('class', 'divTrackField');


    for (let i = 0; i < value.length; i++) {
        const divGarageBtnContainer = createEl<HTMLDivElement>('div');
        divGarageBtnContainer.setAttribute('class', 'divGarageBtnContainer');
        const btnStart = createEl<HTMLButtonElement>('button');
        // btnStart.setAttribute('id', `btnStart${value[i].id}`);
        btnStart.innerText = 'Start';
        const btnStop = createEl<HTMLButtonElement>('button');
        // btnStop.setAttribute('id', `btnStop${value[i].id}`);
        btnStop.innerText = 'Stop';
        const btnRemove = createEl<HTMLButtonElement>('button');
        btnRemove.addEventListener('click', async () => {
            document.body.innerHTML = '';
            await fetch(`http://127.0.0.1:3000/garage/${value[i].id}`, {
                method: 'DELETE',
            });
            await renderPageGarage(pageGarage);
        })
        // btnRemove.setAttribute('id', `btnRemove${value[i].id}`);
        btnRemove.innerText = 'Remove';
        const btnSelect = createEl<HTMLButtonElement>('button');
        // btnDelete.setAttribute('id', `btnDelete${value[i].id}`);
        btnSelect.innerText = 'Select';
        const pName = createEl<HTMLParagraphElement>('p');
        pName.innerText = value[i].name;

        divGarageBtnContainer.append(btnStart, btnStop, btnRemove, btnSelect, pName)

        const divTrack = createEl<HTMLDivElement>('div');
        // divTrack.setAttribute('class', 'divTrack');

        const car = createEl<HTMLDivElement>('div');
        // car.setAttribute('class', 'car');
        let svgColor = value[i].color;
        car.innerHTML = `<svg class=svgCar id=car${value[i].id} xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="256" height="256" viewBox="0 0 256 256" xml:space="preserve"><defs></defs><g style="stroke: none; stroke-width: 0; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: none; fill-rule: nonzero; opacity: 1;" transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)" ><circle cx="70.735" cy="56.775" r="1.955" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 1;" transform="  matrix(1 0 0 1 0 0) "/><circle cx="19.765" cy="56.775" r="1.955" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 1;" transform="  matrix(1 0 0 1 0 0) "/><path id=pach${value[i].id} d="M 75.479 36.045 l -7.987 -1.22 l -2.35 -2.574 c -5.599 -6.132 -13.571 -9.649 -21.874 -9.649 h -6.245 c -1.357 0 -2.696 0.107 -4.016 0.296 c -0.022 0.004 -0.044 0.006 -0.066 0.01 c -7.799 1.133 -14.802 5.468 -19.285 12.106 C 5.706 37.913 0 45.358 0 52.952 c 0 3.254 2.647 5.9 5.9 5.9 h 3.451 c 0.969 4.866 5.269 8.545 10.416 8.545 s 9.447 -3.679 10.416 -8.545 h 30.139 c 0.969 4.866 5.27 8.545 10.416 8.545 s 9.446 -3.679 10.415 -8.545 H 84.1 c 3.254 0 5.9 -2.646 5.9 -5.9 C 90 44.441 83.894 37.331 75.479 36.045 z M 43.269 26.602 c 7.065 0 13.848 2.949 18.676 8.094 H 39.464 l -3.267 -8.068 c 0.275 -0.009 0.55 -0.026 0.826 -0.026 H 43.269 z M 32.08 27.118 l 3.068 7.578 H 18.972 C 22.429 30.813 27.018 28.169 32.08 27.118 z M 19.767 63.397 c -3.652 0 -6.623 -2.971 -6.623 -6.622 c 0 -3.652 2.971 -6.623 6.623 -6.623 s 6.623 2.971 6.623 6.623 C 26.39 60.427 23.419 63.397 19.767 63.397 z M 70.738 63.397 c -3.652 0 -6.623 -2.971 -6.623 -6.622 c 0 -3.652 2.971 -6.623 6.623 -6.623 c 3.651 0 6.622 2.971 6.622 6.623 C 77.36 60.427 74.39 63.397 70.738 63.397 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill:${svgColor};fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" /></g></svg>`

        btnStart.addEventListener('click', async () => {
            let requestId = 0;

            btnStop.addEventListener('click', () => {
                console.log(requestId)
                cancelAnimationFrame(requestId)
            })
            function animate({duration, draw, timing}: IAnimate) {

                let start = performance.now();
              
                requestId = requestAnimationFrame(function animate(time) {
                  let timeFraction = (time - start) / duration;
                  if (timeFraction > 1) timeFraction = 1;
              
                  let progress = timing(timeFraction)
              
                  draw(progress);
              
                  if (timeFraction < 1) {
                    requestAnimationFrame(animate);
                  }
              
                });
              }
            let response = await fetch(`http://127.0.0.1:3000/engine?id=${value[i].id}&status=started`, {
                method: 'PATCH',
            });
            let result = await response.json();
            console.log(result)
                
            if (response.ok){
                animate({
                duration: 10000,
                timing(timeFraction: number) {
                    return timeFraction;
                },
                draw(progress: number) {
                    car.style.marginLeft = progress * 80 + 'vw';
                }
            }); 
            console.log(requestId)
                let drive = await fetch(`http://127.0.0.1:3000/engine?id=${value[i].id}&status=drive`, {
                    method: 'PATCH',
                });
                
            }
            
        })






        divTrack.append(divGarageBtnContainer, car);
        divTrackField.append(divTrack)
    }
    return divTrackField

}