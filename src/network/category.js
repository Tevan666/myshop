import {request} from "./request";

export function getCateGory() {
  return request({
    url: '/category'
  })
}

export function getPopular(maitKey) {
  return request({
    url: '/subcategory',
    params: {
      maitKey
    }
  })
}