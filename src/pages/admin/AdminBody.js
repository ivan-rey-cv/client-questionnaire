import React from 'react'
import styled from 'styled-components/macro'

function AdminBody({ firestoreDB, handleLogout }) {
  const [col, setCol] = React.useState(null)

  const getCollections = async () => {
    try {
      const querySnapshot = await firestoreDB.collection('questionnaires').get()

      querySnapshot.forEach(function(doc) {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, ' => ', doc.data())
      })
    } catch (error) {
      console.log(error)
    }
  }

  React.useEffect(() => {
    getCollections()
  }, [])

  return (
    <Section>
      <SidePanel>
        <header>
          <h1>Admin</h1>
        </header>

        <LogoutDiv onClick={handleLogout}>
          <a>Log out</a>
        </LogoutDiv>
      </SidePanel>
    </Section>
  )
}

const Section = styled.section`
  flex-grow: 1;
`

const SidePanel = styled.aside`
  background-color: palegoldenrod;
  height: 100%;
  width: 18rem;
  padding: 1rem 0.5rem 1rem 1rem;
`
const LogoutDiv = styled.div`
  margin-top: 1rem;
  cursor: pointer;

  color: blue;
`

export default AdminBody
