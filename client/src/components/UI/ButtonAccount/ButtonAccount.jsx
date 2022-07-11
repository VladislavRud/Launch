import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getVacanciesThunk } from '../../../redux/actions/vacancyActions';
import ResumeUser from '../ResumeUser/ResumeUser';

function ButtonAccount() {
  const [comp, setComp] = useState(1);
  const { user } = useSelector((state) => state);
  const dispatch = useDispatch();
  return (
    <div>
      <ul className="nav nav-pills justify-content-center" role="navigation">
        <li className="nav-item">
          <a className="nav-link px-3 active" data-bs-toggle="tab" href="#resume" onClick={() => setComp(1)}>Резюме</a>
        </li>
        <li className="nav-item">
          <a className="nav-link px-3" data-bs-toggle="tab" href="#answers" onClick={() => setComp(2)}>Вакинсии </a>
        </li>
        <li className="nav-itemЗ">
          <a className="nav-link px-3" data-bs-toggle="tab" href="#comments" onClick={() => setComp(3)}>Комментарии</a>
        </li>
        <li className="nav-itemЗ">
          <a className="nav-link px-3" data-bs-toggle="tab" href="#comments" onClick={() => setComp(4)}>Ответы</a>
        </li>
      </ul>
      {/* <div>
        {(comp === 1)
        && (
          <ResumeUser />
        )}
        {(comp === 2)
        && (
          <ResumeUser />
        )}
        {(comp === 3)
        && (
          <ResumeUser />
        )}
        {(comp === 4)
        && (
          <ResumeUser />
        )}
      </div> */}
    </div>
  );
}

export default ButtonAccount;
