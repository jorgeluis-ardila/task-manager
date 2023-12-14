import { css } from '@emotion/react';
import styled from '@emotion/styled';

const StyledTaskCard = styled('div')(
  ({ theme }) => css`
    display: flex;
    align-items: stretch;
    border-radius: 10px;
    min-height: 70px;
    overflow: hidden;
    box-shadow: ${theme.shadows.green.dark2};
    cursor: pointer;
    * {
      transition: all 0.3s ease 0s;
    }
    &.expired {
      .state-bar {
        background: ${theme.colors.red.main};
      }
      .task-info {
        .check-box {
          button {
            background: ${theme.colors.red[10]};
            &::before {
              background: ${theme.colors.red[20]};
            }
          }
        }
      }
    }
    &.completed {
      opacity: 0.5;
      .state-bar {
        background: ${theme.colors.green.main};
      }
      .task-info {
        .check-box {
          button {
            background: ${theme.colors.green[10]};
            &::before {
              background: ${theme.colors.green[20]};
            }
          }
        }
      }
    }
    .state-bar {
      background: ${theme.colors.yellow.main};
      width: 8px;
    }
    .task-info {
      flex-grow: 1;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 8px;
      padding: 7.5px 10px;
      background: ${theme.colors.neutral[0]};
      .check-box {
        button {
          position: relative;
          width: 30px;
          height: 30px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 100%;
          background: ${theme.colors.blue[10]};
          &::before {
            content: '';
            display: block;
            width: 83%;
            height: 83%;
            border-radius: 100%;
            background: ${theme.colors.blue[20]};
            opacity: 0.5;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
          }
          .icon {
            z-index: 1;
            color: ${theme.colors.green[70]};
          }
        }
      }
      .task-data {
        flex-grow: 1;
        &__name {
          font-family: ${theme.typography.family.montserrat};
          font-size: ${theme.typography.size(15)};
          font-weight: 600;
          color: ${theme.colors.blue[80]};
          text-overflow: ellipsis;
          overflow: hidden;
          white-space: nowrap;
        }
        &__specs {
          display: flex;
          align-items: center;
          gap: 5px;
          span {
            font-family: ${theme.typography.family.hauora.light};
            font-size: ${theme.typography.size(13)};
            color: ${theme.colors.neutral[40]};
            text-overflow: ellipsis;
            overflow: hidden;
            white-space: nowrap;
          }
          div {
            width: 3px;
            height: 3px;
            background: ${theme.colors.orange[30]};
          }
        }
      }
      .delete-content {
        .icon-button {
          border-radius: 100px;
          color: ${theme.colors.red.main};
          .icon {
            width: 18px;
          }
        }
      }
    }
  `
);

export default StyledTaskCard;
