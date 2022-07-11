import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';
import InputCity from '../InputCity/InputCity';
import InputLang from '../InputLang/InputLang';
import InputLevel from '../InputLevel/InputLevel';

// import './VacanciesForm.css';

function VacanciesForm({
  levelVacancies, setLevelVacancies, langProg, setLangProg, adVacancies, setCity, city
}) {
  return (
    <div className="p-3 mb-3 bg-light rounded-3">

      <form type="submit" className="simple_form row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 g-2 g-lg-3" id="new_web_vacancies_search_form" action="/" acceptCharset="UTF-8" method="get">

        <InputLevel levelVacancies={levelVacancies} setLevelVacancies={setLevelVacancies} />

        <InputCity setCity={setCity} city={city} />
        <InputLang langProg={langProg} setLangProg={setLangProg} />
        <div className="col d-flex">
          {/* <Button type="submit" name="commit"
          className="btn btn-primary me-2 flex-grow-1" data-disable-with="Найти">
            Найти
          </Button> */}
          <Link class="btn btn-outline-secondary" to="/">Сбросить</Link>

        </div>
      </form>
    </div>
  );
}

export default VacanciesForm;
