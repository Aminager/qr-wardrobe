const getInit = {
      method: "GET",
      mode: "cors",
    };

export function getStatus(org, tag_id) {
    const response = fetch(`http://127.0.0.1:5000/status/${org}/${tag_id}`, getInit).then(res => res.json());
    console.log(response["status"] === 1 ? "Authorized" : "Empty")
    return response["status"] === 1 ? "Authorized" : "Empty"
}

export function getTagInfo(org, tag_id) {
    const response = fetch(`http://127.0.0.1:5000/tag/${org}/${tag_id}`, getInit).then(res => res.json());
    console.log(response)
    return response
}

export function getTags(org) {
    const response = fetch(`http://127.0.0.1:5000/tags/${org}`, getInit).then(res => res.json());
    console.log(response)
    return response
}

export function authTag(org, tag_id, name) {
    const postInit = {
        method: "POST",
        mode: "cors",
        body: JSON.stringify({
            "name": name
        })
    }
    const response = fetch(`http://127.0.0.1:5000/authorize/${org}/${tag_id}`, postInit).then(res => res.json());
    console.log(response)
    return response
}

export function authAdmin(name, pass) {
    const postInit = {
        method: "POST",
        mode: "cors",
        body: JSON.stringify({
            "admin_name": name,
            "admin_pass": pass
        })
    }
    const response = fetch(`http://127.0.0.1:5000/authorize/admin`, postInit).then(res => res.json());
    return response
}

export function authUser(name, pass) {
    const postInit = {
        method: "POST",
        mode: "cors",
        body: JSON.stringify({
            "user_name": name,
            "user_pass": pass
        })
    }
    const response = fetch(`http://127.0.0.1:5000/authorize/user`, postInit).then(res => res.json());
    return response
}

export function resetTag(org, tag_id) {
    const postInit = {
        method: "POST",
        mode: "cors"
    }
    const response = fetch(`http://127.0.0.1:5000/reset/${org}/${tag_id}`, postInit).then(res => res.json());
    console.log(response)
    return response
}

export function createUser(name, pass) {
    const postInit = {
        method: "POST",
        mode: "cors",
        body: JSON.stringify({
            "name": name,
            "pass": pass
        })
    }
    const response = fetch(`http://127.0.0.1:5000/create-user/`, postInit).then(res => res.json());
    console.log(response)
    return response
}