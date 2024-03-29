import { Button } from '@material-ui/core';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import TheatersIcon from '@material-ui/icons/Theaters';
import moment from 'moment';
import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import TicketIcon from '../../../../components/Icons/TicketIcon';
import { IHomePageProps } from '../../model/IHomePageProps';
import { HOME_PAGE_MODAL } from '../../model/IHomePageState';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import './SlideMovies.scss';
import { URL_CINEMA } from '../../../../common';

const SlideMovies: React.FC<IHomePageProps> = (props) => {
	const { movieShowing, movieComingSoon } = props.store.HomePage;
	const { userInfo } = props.store.LoginPage;

	const [showDialogAlertLogin, setShowDialogAlertLogin] = React.useState<boolean>(false);

	React.useEffect(() => {
		props.actions.getMoviesByStatus({
			status: 'showing',
		});
		props.actions.getMoviesByStatus({
			status: 'coming-soon',
		});
	}, []);

	const slideProps = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 6,
		slidesToScroll: 3,
		arrows: true,

		responsive: [
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 5,
					slidesToScroll: 3,
					infinite: true,
				},
			},
			{
				breakpoint: 1000,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 2,
					initialSlide: 2,
				},
			},
			{
				breakpoint: 780,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: 700,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: 500,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	};

	return (
		<React.Fragment>
			<Dialog
				open={showDialogAlertLogin}
				aria-labelledby="alert-dialog-title"
				aria-describedby="alert-dialog-description"
			>
				<DialogTitle id="alert-dialog-title">{`${URL_CINEMA} says`}</DialogTitle>
				<DialogContent>
					<DialogContentText id="alert-dialog-description">
						Bạn vui lòng đăng nhập để tiến hành đặt vé !
					</DialogContentText>
				</DialogContent>
				<DialogActions>
					<Button onClick={() => setShowDialogAlertLogin(false)} variant="contained">
						Từ chối
					</Button>
					<Link to="/login">
						<Button variant="contained" color="primary">
							Chấp nhận
						</Button>
					</Link>
				</DialogActions>
			</Dialog>

			<div className="wrapper-slider">
				<div id="showing" className="wrapper-showing">
					<div className="header-title">Phim đang chiếu</div>
					<Slider {...slideProps}>
						{movieShowing.map((movie, index) => (
							<div className="wrapper-movies" key={index}>
								<div className="wrapper-poster">
									<img src={movie.smallImage} alt="Movies" />
									<div className="wrapper-button">
										<Link to={userInfo ? `/details/${movie.name}` : '/'}>
											<Button
												variant="contained"
												className="button-booking"
												onClick={() => {
													userInfo
														? props.actions.handleCurrentMovie({
																currentMovie: movie,
														  })
														: setShowDialogAlertLogin(true);
												}}
											>
												Đặt vé
												<span
													style={{
														marginLeft: '10px',
													}}
												>
													<TicketIcon />
												</span>
											</Button>
										</Link>

										<Button
											variant="contained"
											className="button-trailer"
											onClick={() =>
												props.actions.toggleModal({
													type: HOME_PAGE_MODAL.TRAILER_MODAL,
													code: movie.trailer,
												})
											}
										>
											Trailer
											<TheatersIcon
												style={{
													marginLeft: '5px',
													fontSize: '18px',
												}}
											/>
										</Button>
									</div>
								</div>
								<div className="wrapper-description">
									<div className="des-k-y-m">
										<span className="des-year">
											{moment(movie.launchDate).format('YYYY')}
										</span>
										<span className="des-kind">{movie.genre}</span>
										<span className="des-maturity">{movie.maturity}+</span>
									</div>
									<h3 className="des-name">{movie.name}</h3>
								</div>
							</div>
						))}
					</Slider>
					<div className="nextArrow">
						<ArrowForwardIosIcon />
					</div>
					<div className="prevArrow">
						<ArrowBackIosIcon />
					</div>
				</div>

				<div id="coming-soon" className="wrapper-showing">
					<div className="header-title">Phim sắp chiếu</div>
					<Slider {...slideProps}>
						{movieComingSoon.map((movie, index) => (
							<div className="wrapper-movies" key={index}>
								<div className="wrapper-poster">
									<img src={movie.smallImage} alt="Movies" />
									<div className="wrapper-button">
										<Link to={userInfo ? `/details/${movie.name}` : '/'}>
											<Button
												variant="contained"
												className="button-booking"
												onClick={() => {
													userInfo
														? props.actions.handleCurrentMovie({
																currentMovie: movie,
														  })
														: setShowDialogAlertLogin(true);
												}}
											>
												Đặt vé
												<span
													style={{
														marginLeft: '10px',
													}}
												>
													<TicketIcon />
												</span>
											</Button>
										</Link>

										<Button
											variant="contained"
											className="button-trailer"
											onClick={() =>
												props.actions.toggleModal({
													type: HOME_PAGE_MODAL.TRAILER_MODAL,
													code: movie.trailer,
												})
											}
										>
											Trailer
											<TheatersIcon
												style={{
													marginLeft: '5px',
													fontSize: '18px',
												}}
											/>
										</Button>
									</div>
								</div>
								<div className="wrapper-description">
									<div className="des-k-y-m">
										<span className="des-year">
											{moment(movie.launchDate).format('YYYY')}
										</span>
										<span className="des-kind">{movie.genre}</span>
										<span className="des-maturity">{movie.maturity}+</span>
									</div>
									<h3 className="des-name">{movie.name}</h3>
								</div>
							</div>
						))}
					</Slider>
					<div className="nextArrow">
						<ArrowForwardIosIcon />
					</div>
					<div className="prevArrow">
						<ArrowBackIosIcon />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default SlideMovies;
