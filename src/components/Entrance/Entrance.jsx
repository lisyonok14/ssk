import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Импортируем useNavigate
import './Entrance.css';

function Entrance() { 
    const [isRegistering, setIsRegistering] = useState(false);
    const navigate = useNavigate(); // Инициализируем navigate

    const toggleRegistering = () => {
        setIsRegistering(!isRegistering);
    };
    
    const [studentID, setStudentID] = useState('');
    const [fullName, setFullName] = useState('');
    const [username, setUsername] = useState('');
    const [group, setGroup] = useState('');
    const [password, setPassword] = useState('');
    const [admin, setAdmin] = useState(false);
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');

    useEffect(() => {
        setError('');
        setMessage('');
    }, [isRegistering]);

    const handleRegisterSubmit = async (e) => {
        e.preventDefault();

        const userData = {
            studentID,
            fullName,
            username,
            group,
            password,
            admin
        };

        try {
            const response = await fetch('/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userData),
            });

            const data = await response.json();

            if (response.status === 201) {
                setMessage(data.message);
                setError('');
                // Перенаправление на страницу входа после успешной регистрации
                navigate('/login');
            } else {
                setError(data.error);
            }
        } catch (err) {
            setError('Ошибка при отправке запроса');
        }
    };

    const handleLoginSubmit = async (e) => {
        e.preventDefault();

        const loginData = {
            username,
            password,
        };

        try {
            const response = await fetch('/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(loginData),
            });

            if (response.ok) {
                navigate('/app');
            } else {
                setError('Неверные учетные данные');
            }
        } catch (err) {
            setError('Ошибка при входе');
        }
    };

    return (
        <>
            {isRegistering ? (
                <div>
                    <div className='loginMain'>
                        <div className='login'>
                            <h1>Регистрация</h1>
                            {message && <p style={{ color: 'green', marginLeft: '20px' }}>{message}</p>}
                            {error && <p style={{ color: 'red', marginLeft: '20px' }}>{error}</p>}
                            <form onSubmit={handleRegisterSubmit}>
                                <input 
                                    type="text" 
                                    placeholder='StudentID' 
                                    className='username' 
                                    value={studentID}
                                    onChange={(e) => setStudentID(e.target.value)}
                                    required 
                                />
                                <input 
                                    type="text" 
                                    placeholder='Username' 
                                    className='username'  
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    required 
                                />
                                <input 
                                    type="text" 
                                    placeholder='ФИО' 
                                    className='fio'  
                                    value={fullName}
                                    onChange={(e) => setFullName(e.target.value)}
                                    required 
                                />
                                <input 
                                    type="text" 
                                    placeholder='Группа' 
                                    className='group' 
                                    value={group}
                                    onChange={(e) => setGroup(e.target.value)}
                                    required 
                                />
                                <input 
                                    type="password" 
                                    placeholder='Пароль' 
                                    className='password' 
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required 
                                />
                                <div className="checkbox-container">
                                    <label htmlFor="checkpoint-checkbox">Администратор</label>
                                    <input
                                        type="checkbox"
                                        checked={admin}
                                        onChange={(e) => setAdmin(e.target.checked)}
                                    />
                                </div>
                                <button type="submit" className='one'>Зарегистрироваться</button>
                                <button type="button" onClick={toggleRegistering} className='two'>Войти</button>
                            </form>
                        </div>
                    </div>
                </div>
            ) : (
                <div className='loginMainn'>
                    <div className='loginn'>
                        <h1>Вход</h1>
                        {error && <p style={{ color: 'red', marginLeft: '20px' }}>{error}</p>}
                        <form onSubmit={handleLoginSubmit}>
                            <input 
                                type="text" 
                                placeholder='Username' 
                                className='username' 
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                required 
                            />
                            <input 
                                type="password" 
                                placeholder='Пароль' 
                                className='password' 
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required 
                            />
                            <button type="submit" className='o'>Войти</button>
                            <button type="button" className='t' onClick={toggleRegistering}>Регистрация</button>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
}

export default Entrance;