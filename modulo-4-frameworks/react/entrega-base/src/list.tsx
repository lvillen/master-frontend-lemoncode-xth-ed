import React, { useContext } from "react";
import { Link, generatePath } from "react-router-dom";
import { OrganizationContext } from "./organization.context";

interface MemberEntity {
  id: string;
  login: string;
  avatar_url: string;
}

export const ListPage: React.FC = () => {
  const [members, setMembers] = React.useState<MemberEntity[]>([]);
  const {organization, setOrganization} = React.useContext(OrganizationContext);


  React.useEffect(() => {
    fetch(`https://api.github.com/orgs/${organization}/members`)
      .then((response) => response.json())
      .then((json) => setMembers(json));
  }, []);

  const handleInput = (e) => {setOrganization(e.target.value)}

  const handleSubmit = () => {    
    fetch(`https://api.github.com/orgs/${organization}/members`)
    .then((response) => response.json())
    .then((json) => setMembers(json));
  };

  return (
    <>
      <h2>Hello from List page</h2>
      <input 
        placeholder="Organization"
        value={organization}
        onChange={handleInput}
      />
      <button type="submit" onClick={handleSubmit}>Search</button>
      <table className="table">
        <thead>
          <tr>
            <th>Avatar</th>
            <th>Id</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {members.map((member) => (
            <tr key={member.id}>
              <td>
                <img src={member.avatar_url} style={{ width: "5rem" }} />
              </td>
              <td>
                <span>{member.id}</span>
              </td>
              <td>
                <Link to={generatePath("/detail/:id", { id: member.login })}>
                  {member.login}
                </Link>{" "}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
