import { createSelector } from 'reselect';

const getModalStatus = (state) => state.modal;

export const modalStatusSelector = createSelector(
    getModalStatus,
    (state) => state.isModalOpen
);