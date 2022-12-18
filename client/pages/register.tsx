import { default as Axios  } from 'axios';
import Link from 'next/link';
import router from 'next/router';
import React, { FormEvent } from 'react';
import { useState } from 'react';
import InputGroup from '../src/components/InputGroup';

const Register = () => {
    const [email,setEmail] = useState('')
    const [username,setUsername] = useState('')
    const [password,setPassword] = useState('')
    const [errors,setErrors] = useState<any>({});

    const handlesubmit = async (e:FormEvent)=>{
        e.preventDefault();
        try {
            const res = await Axios.post("/auth/register",{
                email,
                password,
                username,
            })
            console.log(res);
            router.push("/login")

        } catch (err){
            console.error(err);
            setErrors(err?.response?.data || {});
        }


    }

    return (
        <div className='bg-white'>
            <div className='flex flex-col items-center justify-center h-screen p-6'>
                <div className='w-10/12 mx-auto md:w-96'>
                    <h1 className='mb-2 text-lg'>회원 가입</h1>
                    <form onSubmit={handlesubmit}>
                        <InputGroup
                            placeholder="이메일"
                            value={email}
                            setValue={setEmail}
                            error={errors.email}
                        />
                        <InputGroup
                            placeholder="이름"
                            value={username}
                            setValue={setUsername}
                            error={errors.username}
                        />
                        <InputGroup
                            placeholder="비밀번호"
                            value={password}
                            type="password"
                            setValue={setPassword}
                            error={errors.password}
                        />
                        <button className='w-full py-2 mb-1 text-xs font-bold text-white uppercase bg-gray-400 rounded border border-gray-400'>
                            회원 가입
                        </button>
                    </form>
                    <small>
                        이미 가입 하셨나요 ?
                        <Link href='/login'>
                            <span className='ml-1 text-blue-500 uppercase'>로그인</span>
                        </Link>
                        </small>
                </div>
            </div>
        </div>
    );
};

export default Register;