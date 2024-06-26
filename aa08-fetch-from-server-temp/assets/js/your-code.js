export function getAllDogs() {
    return fetch('/dogs')
}

export function getDogNumberTwo() {
    return fetch('/dogs/2')
}

export function postNewDog() {
    const method = 'POST'
    const headers = {'Content-Type': 'application/x-www-form-urlencoded'};
    const body = new URLSearchParams({name: 'Rover', age: 69});
    const options = {method, headers, body}
    return fetch('/dogs', options)
}

export function postNewDogV2(name, age) {
    const method = 'POST'
    const headers = {'Content-Type': 'application/x-www-form-urlencoded'};
    const body = new URLSearchParams({name, age});
    const options = {method, headers, body}
    return fetch('/dogs', options)
}

export function deleteDog(id) {
    return fetch(`/dogs/${id}/delete`, {
        method: 'POST',
        headers: {
            AUTH: 'ckyut5wau0000jyv5bsrud90y'
        }
    })
}
