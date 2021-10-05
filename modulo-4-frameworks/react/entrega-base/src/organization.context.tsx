import React from 'react';

interface OrganizationContextModel {
  organization: string;
  setOrganization: (organization: string) => void;
}

export const OrganizationContext: React.Context<OrganizationContextModel> = React.createContext({organization: "lemoncode", setOrganization: (_organization) => {}});

export const OrganizationProvider: React.FC = (props) => {
  const [organization, setOrganization] = React.useState<string>("lemoncode")

  const contextValue = { organization: organization, setOrganization }

  return(
    <>
      <OrganizationContext.Provider value={contextValue}>
        {props.children}
      </OrganizationContext.Provider>
    </>
  )
}