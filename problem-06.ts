{
    //Start

    interface Profile {
        name: string,
        age: number,
        email: string
    }

    const updateProfile =<T,X> (first: T, second: X):T => {
        return { ...first, ...second}
    }

    const myProfile: Profile = {
        name: "Alice",
        age: 25,
        email: "alice@example.com"
    };
    const updated:object = updateProfile(myProfile, {age: 26})
    console.log(updated)

    //End
}