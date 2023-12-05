function edit(reference, stringMatch, replacer)
{
    let pattern = new RegExp(stringMatch, 'g');
    reference.textContent = reference.textContent.replace(pattern, replacer);
}