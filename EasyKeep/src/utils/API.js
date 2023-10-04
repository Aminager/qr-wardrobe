const getInit = {
      method: "GET",
      mode: "cors",
    };

const postInit = {
    method: "POST",
    mode: "cors"
}

export function getStatus(org, tag_id) {
    const response = fetch(`http://127.0.0.1:5000/status/${org}/${tag_id}`, getInit).then(res => res.json());
    return response["status"] === 1 ? "Authorized" : "Empty"
}

export function getTagInfo(org, tag_id) {
    const response = fetch(`http://127.0.0.1:5000/tag/${org}/${tag_id}`, getInit).then(res => res.json());
    return response
}

export function authTag(org, tag_id) {
    const response = fetch(`http://127.0.0.1:5000/authorize/${org}/${tag_id}`, postInit).then(res => res.json());
    return response
}