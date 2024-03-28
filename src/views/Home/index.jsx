import { useEffect, useMemo, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import cn from 'classnames';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Mousewheel } from 'swiper/modules';
import { useData } from 'providers/context';
import { CreateButtons, TaskFilters, TitleBar } from './components';
import { Button, CardList, CategoryCard, Counter, Icon, IconButton, ProgressBar, StatusMessage, TaskCard } from 'core';
import { actionTypesHomeFilters, filtersActions, getDailyData } from './constants';
import { CategoriesWrapper, Progress, SectionWrapper } from './style';
import 'swiper/css';
import 'swiper/css/pagination';

const Home = () => {
  const navigate = useNavigate();
  const { data, categoryActions } = useData();
  const tasksListed = data.flatMap(category => category.tasks);
  const favoriteBoards = data.filter(category => category.isFavorite === true);

  const [activeFilter, setActiveFilter] = useState(actionTypesHomeFilters.todayActive);
  const taskToShow = useMemo(() => filtersActions[activeFilter](tasksListed), [activeFilter, tasksListed]);
  const [progressHeight, setProgressHeight] = useState(0);
  const progressRef = useRef(null);
  const dailyData = getDailyData(tasksListed);

  useEffect(() => {
    setProgressHeight(progressRef.current?.clientHeight);
  }, [tasksListed, activeFilter]);

  const handleShowAll = () => navigate('boards');
  const handleShowFavorite = () => navigate('boards?favorite=true');

  return data?.length ? (
    <>
      <SectionWrapper ref={progressRef}>
        <TitleBar text="Tu Progreso" />
        <div className="progress-container">
          <Progress>
            <div className="inner-wrapper">
              <div className="couter">
                <div className="number">
                  <Icon type="board" />
                  <p>{data.length}</p>
                </div>
                <p className="text">Tableros</p>
              </div>
              <div className="couter">
                <div className="number">
                  <Icon type="task" />
                  <p>{tasksListed.filter(task => !task.isCompleted).length}</p>
                </div>
                <p className="text">Pendientes</p>
              </div>
            </div>
            <hr />
            <div className="inner-wrapper daily">
              <div className="daily-task">
                <p>Tus Tareas Diarias</p> <Counter isCategory total={dailyData.total} current={dailyData.completed} />
              </div>
              <ProgressBar percentage={dailyData.percentage} showText />
            </div>
          </Progress>
        </div>
        <Button className="see-all" onClick={handleShowAll}>
          Ver Todos
          <Icon type="frontArrow" />
        </Button>
      </SectionWrapper>
      <SectionWrapper style={{ height: `calc(100% - ${progressHeight + 35}px)` }}>
        <TitleBar text="Tus Tareas" />
        <TaskFilters data={tasksListed} activeFilter={activeFilter} onChangeFilter={setActiveFilter} />
        {taskToShow?.length ? (
          <CardList className="taks-list">
            {taskToShow.map(taskItem => (
              <li key={taskItem.id}>
                <TaskCard taskData={taskItem} />
              </li>
            ))}
          </CardList>
        ) : (
          <StatusMessage type="emptyHome" />
        )}
      </SectionWrapper>
      {!!favoriteBoards.length && (
        <SectionWrapper>
          <TitleBar text="Tu Tablero Favoritos" />
          <CategoriesWrapper>
            <Swiper
              tag="ul"
              spaceBetween={10}
              slidesPerView={2}
              grabCursor={true}
              // mousewheel={true}
              navigation={{
                prevEl: '.swiper-button-prev',
                nextEl: '.swiper-button-next',
              }}
              modules={[Navigation, Mousewheel]}
              className="categories-list"
            >
              {favoriteBoards.map(categoryItem => (
                <SwiperSlide key={categoryItem.id} tag="li">
                  <CategoryCard
                    categoryData={categoryItem}
                    actions={categoryActions}
                    className={cn({ 'half-width': true })}
                  />
                </SwiperSlide>
              ))}
              <IconButton className="swiper-button swiper-button-prev" iconType="arrowLeft" />
              <IconButton className="swiper-button swiper-button-next" iconType="arrowRight" />
            </Swiper>
          </CategoriesWrapper>
          <Button className="see-all" onClick={handleShowFavorite}>
            Ver Todos
            <Icon type="frontArrow" />
          </Button>
        </SectionWrapper>
      )}
    </>
  ) : (
    <>
      <StatusMessage type="empty" />
      <CreateButtons hasData={!!data.length} />
    </>
  );

  /* <Message className="message-wrapper">
    <p className="message-hightligth">¡Que bien!</p>
    <p className="message-description">Parece que no tienes tareas por vencer</p>
  </Message> */
};

export { Home };
