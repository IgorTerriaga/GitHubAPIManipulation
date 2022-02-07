import React, {useEffect, useState} from 'react';
import axios from 'axios';

import { AiOutlineUser } from 'react-icons/ai';
// import {BiGitRepoForked} from 'react-icons/bi';
import {FiGithub} from 'react-icons/fi';

import Box from '../../components/Box';
import './styles.css'

const Home: React.FC = () => {
  
  const [users, setUsers] = useState<any[]>([]);
  const [userSearch, setUserSearch] = useState("");

  useEffect(()=>{
    axios.get(`https://api.github.com/search/users?q=${userSearch}&per_page=5`).then(({data})=>{
      setUsers(data.items);
    });
    
  }, [userSearch]);

  return (
    <div className="allPage">
      <header className="HomeRoot">
        <FiGithub color="#fff" size={100} />
        <div className="HomeBox">
          {/* <div className="HomeBox"> */}
            <Box 
              title="Usuário" 
              description="Digite o nome de um usuário" 
              icon={<AiOutlineUser size={25} />} 
              value={userSearch} 
              set={setUserSearch}              
            />
        </div>
      </header>
      <main className="result">
         {users.length === 0 ? (<h2>Resultado da Pesquisa</h2>):(
          users.map((user, index)=>(
            <div className="user" key={index}  onClick={()=>{window.open(`https://github.com/${user.login}`, '_blank')}}>
              <img src={user.avatar_url} alt="avatar user" />
              <span> {user.login} </span>
            </div>
          ))
        )}
        
      </main>
    </div>
  );
}

export default Home;