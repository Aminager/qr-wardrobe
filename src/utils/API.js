const HOST = "http://127.0.0.1:5000"
const getInit = {
      method: "GET",
      mode: "cors",
    };

export function getStatus(org, tag_id) {
    const response = fetch(`${HOST}/${org}/${tag_id}`, getInit).then(res => res.json());
    console.log(response["status"] === 1 ? "Authorized" : "Empty")
    return response["status"] === 1 ? "Authorized" : "Empty"
}

export function getTagInfo(org, tag_id) {
    const response = fetch(`${HOST}/tag/${org}/${tag_id}`, getInit).then(res => res.json());
    console.log(response)
    return response
}

export function getTags(org) {
    const response = fetch(`${HOST}/tags/${org}`, getInit).then(res => res.json());
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
    const response = fetch(`${HOST}/authorize/${org}/${tag_id}`, postInit).then(res => res.json());
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
    const response = fetch(`${HOST}/authorize/admin`, postInit).then(res => res.json());
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
    const response = fetch(`${HOST}/authorize/user`, postInit).then(res => res.json());
    return response
}

export function resetTag(org, tag_id) {
    const postInit = {
        method: "POST",
        mode: "cors"
    }
    const response = fetch(`${HOST}/reset/${org}/${tag_id}`, postInit).then(res => res.json());
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
    const response = fetch(`${HOST}/create-user/`, postInit).then(res => res.json());
    console.log(response)
    return response
}