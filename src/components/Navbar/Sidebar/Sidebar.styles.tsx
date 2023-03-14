import styled from "@emotion/styled";
export const SidebarContainer = styled.div`
  .wrapper .sidebar {
    background: rgb(5, 68, 104);
    top: 0;
    left: 0;
    width: 250px;
    height: 100vh;
    padding: 0px;
    transition: all 0.5s ease;
  }
  .wrapper .sidebar ul {
    list-style-type: none;
    padding-left: 0px;
    padding-right: 0px;
  }

  .wrapper .sidebar ul li a {
    display: block;
    padding: 13px 10px;
    border-bottom: 1px solid #10558d;
    color: rgb(241, 237, 237);
    font-size: 16px;
    position: relative;
    text-decoration: none;
  }
  .wrapper .sidebar ul li a:hover,
  .wrapper .sidebar ul li a.active {
    color: #0c7db1;

    background: white;
    border-right: 2px solid rgb(5, 68, 104);
  }

  .wrapper .sidebar ul li a:hover:before,
  .wrapper .sidebar ul li a.active:before {
    display: block;
  }
`;
