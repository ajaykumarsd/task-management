import styled from '@emotion/styled'
export const CardsItems = styled.div`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 100px;
  .right-content {
    padding: 10px 40px;
    overflow-y: auto;
    flex: 1;
  }
  .task-box {
    position: relative;
    border-radius: 12px;
    width: 250px;
    padding: 16px;
    cursor: pointer;
    box-shadow: 2px 2px 4px 0px rgba(235, 235, 235, 1);

    &:hover {
      transform: scale(1.02);
    }
  }

  .time {
    margin-bottom: 6px;
    opacity: 0.6;
    font-size: 10px;
  }

  .task-name {
    font-size: 14px;
    font-weight: 500;
    opacity: 1;
  }

  .card-bg {
    background-color: #ddd7d2;
  }
  .more-button {
    position: absolute;
    width: 3px;
    height: 3px;
    border-radius: 50%;
    background-color: #8e92a4;
    box-shadow: 0 -4px 0 0 #8e92a4, 0 4px 0 0 #8e92a4;
    opacity: 0.4;
    right: 20px;
    top: 30px;
    cursor: pointer;
  }
`
