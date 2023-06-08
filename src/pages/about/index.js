import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import {
	dataabout,
	meta,
	worktimeline,
	skills,
	services,
	services2,
	education,
	certificates,
} from "../../content_option";

export const About = () => {
	return (
		<HelmetProvider>
			<Container className="About-header">
				<Helmet>
					<meta charSet="utf-8" />
					<title> Resume | {meta.title}</title>
					<meta name="description" content={meta.description} />
				</Helmet>
				<Row className="mb-5 mt-3 pt-md-3">
					<Col lg="8">
						<h1 className="display-4 mb-4">Resume</h1>
						<hr className="t_border my-4 ml-0 text-left" />
					</Col>
				</Row>
				<Row className="sec_sp">
					<Col lg="5">
						<h3 className="color_sec py-4">{dataabout.title}</h3>
					</Col>
					<Col lg="7" className="d-flex align-items-center data18">
						<div>
							<p>{dataabout.aboutme}</p>
						</div>
					</Col>
				</Row>
				<Row className="sec_sp">
					<Col lang="5">
						<h3 className="color_sec py-4">Education</h3>
					</Col>
					<Col lg="7">
						{education.map((data, i) => {
							return (
								<div className="service_ py-4 data18" key={i}>
									<p className="service__title">
										{data.title}
									</p>
									<p className="service_desc data18">
										{data.description}
									</p>
								</div>
							);
						})}
					</Col>
				</Row>
				<Row className=" sec_sp">
					<Col lg="5">
						<h3 className="color_sec py-4">Work Timline</h3>
					</Col>
					<Col lg="7">
						<table className="table caption-top">
							<tbody>
								{worktimeline.map((data, i) => {
									return (
										<tr className="data18" key={i}>
											<td scope="row">{data.jobtitle}</td>
											<td>{data.where}</td>
											<td>{data.date}</td>
										</tr>
									);
								})}
							</tbody>
						</table>
					</Col>
				</Row>
				<Row className="sec_sp">
					<Col lang="5">
						<h3 className="color_sec py-4">Work Description</h3>
					</Col>
					<Col lg="7">
						{services.map((data, i) => {
							return (
								<div className="service_ py-4 data18" key={i}>
									<p className="service__title data18">
										{data.title}
									</p>
									<p className="service_desc data18">
										{data.description}
									</p>
								</div>
							);
						})}
					</Col>
				</Row>
				<Row className="sec_sp">
					<Col lg="5">
						<h3 className="color_sec py-4">Skills</h3>
					</Col>
					<Col lg="7">
						{skills.map((data, i) => {
							return (
								<div className="data18" key={i}>
									<p className="progress-title data18">
										{data.name}
									</p>
									{/* <div className="progress">
										<div
											className="progress-bar"
											style={{
												width: `${data.value}%`,
											}}
										>
											<div className="progress-value">
												{data.value}%
											</div>
										</div>
									</div> */}
									{/* <div className="left1212">hi</div> */}
								</div>
							);
						})}
					</Col>
				</Row>

				<Row className="sec_sp">
					<Col lang="5">
						<h3 className="color_sec py-4">Awards</h3>
					</Col>
					<Col lg="7">
						{services2.map((data, i) => {
							return (
								<div className="service_ py-4 data18" key={i}>
									<h6 className="service__title data18">
										{data.title}
									</h6>
									<p className="service_desc data18">
										{data.description}
									</p>
								</div>
							);
						})}
					</Col>
				</Row>
				<Row className="sec_sp">
					<Col lang="5">
						<h3 className="color_sec py-4">Certifications</h3>
					</Col>
					<Col lg="7">
						{certificates.map((data, i) => {
							return (
								<div className="service_ py-4 data18" key={i}>
									<a target="_blank" href={data.link}>
										<p className="service__title data18">
											{data.title}
										</p>
									</a>

									<p className="service_desc data18">
										{data.description}
									</p>
								</div>
							);
						})}
					</Col>
				</Row>
			</Container>
		</HelmetProvider>
	);
};
