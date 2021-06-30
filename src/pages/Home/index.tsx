import React, {useEffect, useState} from 'react';
import axios from 'axios';

import { AiOutlineUser, AiFillStar } from 'react-icons/ai';
// import {BiGitRepoForked} from 'react-icons/bi';
import {RiComputerLine} from 'react-icons/ri';
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
            {/* <Box title="Linguagens" description="Digite o nome de uma linguagem" icon={<RiComputerLine size={25} />} value={userSearch} 
              set={setUserSearch} /> */}
          {/* </div> */}
          {/* <div className="HomeBox"> */}
            {/* <Box title="Repositories" description="Digite o nome de um repositório" icon={<BiGitRepoForked size={25} />}/> */}
            {/* <Box title="Top Repositories" description="Digite o nome de um repositório top" icon={<AiFillStar size={25} />}/>       */}
          {/* </div> */}
        </div>
      </header>
      <main className="result">
         {users.length === 0 ? (<h2>Resultado da Pesquisa</h2>):(
          users.map((user)=>(
            <div className="user" onClick={()=>{window.open(`https://github.com/${user.login}`, '_blank')}}>
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