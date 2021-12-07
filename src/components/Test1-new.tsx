/*
 * @Author: web_XL
 * @Date: 2021-07-21 14:25:50
 * @LastEditors: web_XL
 * @LastEditTime: 2021-09-09 16:50:07
 * @Description:
 */
import { Button } from 'antd'
import React, { memo, useCallback, useEffect, useMemo, useState } from 'react'
// https://blog.csdn.net/frontend_frank/article/details/104243286
// useRef , useRef 与 createRef 区别

export default memo(function Test1() {
    const [obj, setObj] = useState({ num: 1 })
    const [obj2, setObj2] = useState({ age: 1 })
    const [person, setPerson] = useState({ name: 'xl', id: 1 })
    console.log("render");

    const fn1 = useCallback(() => {
        console.log("obj", obj);
    }, [obj2])

    const memoObjNum = useMemo(() => {
        return obj.num
    }, [])

    useEffect(() => {
        console.log("useEffect");

        setTimeout(() => {
            alert(obj2.age)
        }, 2000);
        console.log("obj", obj);
        console.log("obj2", obj2);
    }, [obj2])

    useEffect(() => {
        console.log("person useEffect", person);
    }, [person])

    useEffect(() => {
        console.log("person.id useEffect", person);
    }, [obj2])


    // useEffect 是每次都是创建一个新的函数、 
    // useCallback 会缓存数据的引用  


    return (
        <div>
            <h1>obj:{JSON.stringify(obj)}</h1>
            <h1>obj2:{JSON.stringify(obj2)}</h1>
            <h1>person:{JSON.stringify(person)}</h1>
            <h1>memoObjNum:{memoObjNum}</h1>

            Test1
            <Button onClick={() => { setObj({ ...obj, num: obj.num + 1 }) }}>add obj num</Button>
            <Button onClick={() => { setObj2({ ...obj2, age: obj2.age + 1 }) }}>add obj2 age</Button>
            <br />
            <Button onClick={() => { setPerson({ ...person, name: person.name + "1" }) }}>add person name</Button>
            <Button onClick={() => { setPerson({ ...person, id: person.id + 1 }) }}>add person id</Button>
            <Button onClick={fn1}>log obj </Button>
        </div>
    )
})
