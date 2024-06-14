// function customRender(mainContainer,reactElement)
// {
//     const domElement = document.createElement(reactElement.type)
//     domElement.innerHTML = reactElement.children
//     domElement.setAttribute('href',reactElement.props.href)
//     domElement.setAttribute('target',reactElement.props.target)

//     mainContainer.appendChild(domElement)

// }

function anotherRender(mainContainer,reactElement)
{
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    for(const prop in reactElement.props)
    {
        if(prop===reactElement.children)
        {
            continue;
        }
        domElement.setAttribute(prop,reactElement.props[prop])
    }

    mainContainer.appendChild(domElement)

}



const reactElement = {
    type : 'a',
    props : {
        href : 'https://amazon.com',
        target : '_blank'
    },
    children : 'Click me!',
}




const mainContainer = document.getElementById('root')

// customRender(mainContainer,reactElement)
anotherRender(mainContainer,reactElement)