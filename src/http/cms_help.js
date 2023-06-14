import api from './index.js'

const One = async (id) => {

  try {
    const response = await api.request({
      url: '/mall/cms-help/one/' + id,
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
      url: '/mall/cms-help/del/' + id,
      method: 'get',
    })
    return response
  } catch (error) {
    throw error
  }
}

const getCmsHelpsByCategoryId = async (id) => {

  try {
    const response = await api.request({
      url: '/mall/cms-help/getCmsHelps/'+id ,
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
      url: '/mall/cms-help/edit',
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
      url: '/mall/cms-help/add',
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
      url: '/mall/cms-help/page',
      method: 'post',
      data,
    })
    return response
  } catch (error) {
    throw error
  }
}

export default { One, Del, getCmsHelpsByCategoryId, Edit, Add, Page }
