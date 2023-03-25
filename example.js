function ourFetch(value) {
    return new Promise(
        (resolve, reject) => {
            if(value === 1) {
                setTimeout(() => {
                    resolve('Success');
                }, 5000);
                
            } else {
                reject('Fail');
            }
        }
    )
}

export async function test() {
    console.log('Test works')

    // try {
    //     console.log('Waiting');
    //     const result = await ourFetch(1)
    //     console.log('Success with result: ', result);
    // } catch (e) {
    //     console.log('Catch: ', e);
    // }

    console.log('Waiting1');
    const promise = ourFetch(1)
    console.log('Waiting2');
    
    promise.then((v)=> console.log('Success', v)).catch((e) => console.log('Error: ', e));

    console.log('Waiting3');
}