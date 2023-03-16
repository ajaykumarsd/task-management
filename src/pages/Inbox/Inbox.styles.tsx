import styled from '@emotion/styled'
export const InboxItems = styled.div`
  * {
    box-sizing: border-box;
  }
  .star {
    visibility:hidden;
    font-size:30px;
    cursor:pointer;
}
.star:before {
   content: 'ff';
   position: absolute;
   visibility:visible;
}
.star:checked:before {
   content: 'dd';
   position: absolute;
}
  body {
    font-family: 'Open Sans', sans-serif;
    margin: 0;
    padding: 1rem;
  }

  h1,
  dl {
    margin: 0;
  }

  article {
    min-width: 40rem;
    margin: 0 auto;
    padding: clamp(1rem, 2vw, 3rem);
    border-radius: 1rem;
    .list-header {
      display: flex;
      justify-content: space-between;
      .add-task {
        cursor: pointer;
      }
    }
  }

  article > * + * {
    margin-top: 1rem;
  }

  dl {
    display: grid;
    grid-template-columns: auto 1fr;
    gap: 0.5rem 0;
  }

  dl > * {
    background: antiquewhite;
    padding: 0.3rem;
  }

  dl > :nth-of-type(2n) {
    background: lavenderblush;
  }

  dt {
    display: flex;

    span {
      margin-left: 10px;
      font-size: 15px;
      color: #777982;
      font-weight: 500;
    }
    .form-check-input {
      font-size: 20px;
      cursor: pointer;
    }
  }

  dd {
    margin: 0;
    align-items: center;
  }
`
