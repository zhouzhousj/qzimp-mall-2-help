import api from './index.js'

const One = async (id) => {

  try {
    const response = await api.request({
      url: '/mall/cms-help-category/one/' + id,
      method: 'get',
    })
    return response
  } catch (error) {
    throw error
  }
}

const Del = async (id) => {

  try {
    const response = await api.request({
      url: '/mall/cms-help-category/del/' + id,
      method: 'get',
    })
    return response
  } catch (error) {
    throw error
  }
}

const Edit = async (data) => {

  try {
    const response = await api.request({
      url: '/mall/cms-help-category/edit',
      method: 'post',
      data,
    })
    return response
  } catch (error) {
    throw error
  }
}

const Add = async (data) => {
  try {
    const response = await api.request({
      url: '/mall/cms-help-category/add',
      method: 'post',
      data,
    })
    return response
  } catch (error) {
    throw error
  }
}

const Page = async (data) => {

  try {
    const response = await api.request({
      url: '/mall/cms-help-category/page',
      method: 'post',
      data,
    })
    return response
  } catch (error) {
    throw error
  }
}

export default { One, Del, Edit, Add, Page }
