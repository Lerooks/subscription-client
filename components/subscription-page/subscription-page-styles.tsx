import styled from 'styled-components'

export const Wrapper = styled.div`
  display: block;
  width: 100%;
  overflow-x: auto;
  max-width: 1200px;
  padding: 20px 0;
`

export const Table = styled.table`
  background-color: #fff;
  width: 100%;
  max-width: 100%;
`

export const TableHead = styled.thead``

export const TableBody = styled.tbody``

export const Head = styled.th`
  background-color: #fff;
  padding: 8px;
  text-align: left;
`

export const Row = styled.tr`
  &:nth-of-type(odd) {
    background: #eee;
  }
`

export const Data = styled.td`
  background-color: #fff;
  padding: 8px;
`

export const EditIcon = styled.img`
  max-width: 24px;

  &:hover {
    cursor: pointer;
  }
`
