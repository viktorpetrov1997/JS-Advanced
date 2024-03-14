function validateRequest(request) 
{
    const methodRegex = /^(GET|POST|DELETE|CONNECT)$/;
    const uriRegex = /^[a-zA-Z0-9.]+$|^(\*)$/;
    const versionRegex = /^(HTTP\/0\.9|HTTP\/1\.0|HTTP\/1\.1|HTTP\/2\.0)$/;
    const messageRegex = /^[^<>\\&'"]*$/;

    if(!request.hasOwnProperty("method")) 
    {
        throw new Error("Invalid request header: Invalid Method");
    } 
    else if(!methodRegex.test(request.method)) 
    {
        throw new Error("Invalid request header: Invalid Method");
    }

    if(!request.hasOwnProperty("uri")) 
    {
        throw new Error("Invalid request header: Invalid URI");
    } 
    else if(!uriRegex.test(request.uri)) 
    {
        throw new Error("Invalid request header: Invalid URI");
    }

    if(!request.hasOwnProperty("version")) 
    {
        throw new Error("Invalid request header: Invalid Version");
    } 
    else if(!versionRegex.test(request.version)) 
    {
        throw new Error("Invalid request header: Invalid Version");
    }

    if(!request.hasOwnProperty("message")) 
    {
        throw new Error("Invalid request header: Invalid Message");
    } 
    else if(!messageRegex.test(request.message)) 
    {
        throw new Error("Invalid request header: Invalid Message");
    }

    return request;
}

let object = {
    method: 'GET',
    uri: 'svn.public.catalog',
    version: 'HTTP/1.1',
    message: ''
}

try 
{
    validateRequest(object);
} 
catch(error) 
{
    console.log(error.message);
}
