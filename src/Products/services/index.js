import axios from 'axios'

const baseUrl = process.env.REACT_APP_BASE_URL

/**
 * Función que se encarga de hacer una petición a nuestro EndPoint
 * Y obtiene el listado de productos almacenados en la base de datos  
 */
export async function getProducts () {
  try {
    const response = await axios({
      url: `${baseUrl}/products`,
      method: 'GET'
    })

    return response
  } catch (e) {  
    console.log(`TCL: -> getProducts -> catch (e)`, e)    
  }
}

export async function saveProduct (productData) {
  try {
    console.log(`TCL: -> saveProduct -> productData`, productData);    
    const formData = new FormData()

    formData.append('name', productData.name)
    formData.append('unitaryPrice', productData.unitaryPrice)
    formData.append('size', productData.size)
    formData.append('description', productData.description)
    formData.append('image', productData.image)

    const response = await axios( {
      url: `${baseUrl}/products`,
      method: 'POST',
      data: formData,
    })

    return response
  } catch (e) {
    console.log(`TCL: -> saveProduct -> catch (e)`, e)    
  }
}