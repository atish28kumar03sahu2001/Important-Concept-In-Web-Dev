//PROMISE CONCEPT
const fetchdata = () => {
    return new Promise((resolve, reject) => {
        fetch('https://dummyjson.com/posts')
            .then(response => {
                if(!response.ok){
                    reject('Network Response Was Not Ok');
                }
                return response.json();
            })
            .then(data=>{
                resolve(data);
            })
            .catch(error=>{
                reject(error)
            })
    })
}
fetchdata()
    .then(data => {
        console.log(data);
        let list = document.getElementById("Pbox");
        data.posts.forEach(post => {
            let p = document.createElement('p');
            p.classList = "pp"
            p.textContent = post.title;
            list.appendChild(p);
        })
    })
    .catch(error => {
        console.log(error);
    })

//Async Await Concept
const fetchdata1 = async() => {
    try{
        let res = await fetch('https://dummyjson.com/posts');
        let data = await res.json();

        let list1 = document.getElementById("Pbox1");
        data.posts.forEach(post => {
            let p = document.createElement('p');
            p.classList = "pp"
            p.textContent = post.title;
            list1.appendChild(p);
        })
    } catch(error) {
        console.error(error);
    }
}
fetchdata1();

//Axios Concept
const fetchdata2 = async() => {
    try{
        let res = await axios.get('https://dummyjson.com/posts');
        let data = res.data;
        let list2 = document.getElementById("Pbox2");
        data.posts.forEach(post => {
            let p = document.createElement('p');
            p.classList = "pp";
            p.textContent = post.title;
            list2.appendChild(p);
        })
    } catch(error) {
        console.error(error);
    }
}
fetchdata2();