
function race(promises) {
    if (!Array.isArray(promises) || promises.length === 0) {
        return Promise.reject(new Error('Empty'))
    }
    return new Promise((resolve, reject) => {
        promises.forEach((promise) => {
            promise.then((result) => {
                resolve(result)
            })
            .catch((error) => {
                reject(error)
            })
        })
    })
}

const promise1 = new Promise((resolve) => setTimeout(() => resolve('Promise 1 resolved'), 2000))
const promise2 = new Promise((resolve, reject) => setTimeout(() => reject('Promise 2 rejected'), 1000))
const promise3 = new Promise((resolve) => setTimeout(() => resolve('Promise 3 resolved'), 1500))

race([promise1, promise2, promise3])
    .then((result) => {
        console.log('First promise resolved or rejected:', result)
    })
    .catch((error) => {
        console.error('All promises rejected:', error)
    })