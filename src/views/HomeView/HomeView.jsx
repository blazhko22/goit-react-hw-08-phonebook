import React from 'react';
import s from './HomeView.module.css';

export default function HomeView() {
  return (
    <div className={s.container}>
      <h1 className={s.title}>
        Welcome! Please Login or Register for use "Phonebook"
      </h1>
    </div>
  );
}
