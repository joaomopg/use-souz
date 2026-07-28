import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background: #000;
  color: white;
  padding-top: ${({theme})=>theme.spacing.xxl}px;
`;

export const Content = styled.div`

    max-width:1400px;

    margin:0 auto;

    display:flex;

    gap:${({theme})=>theme.spacing.xxxl}px;

    padding:
        0
        ${({theme})=>theme.spacing.lg}px
        ${({theme})=>theme.spacing.xxxxl}px;

    @media(max-width:${({theme})=>theme.breakpoints.laptop}px){

        gap:${({theme})=>theme.spacing.xl}px;

    }

    @media(max-width:${({theme})=>theme.breakpoints.tablet}px){

        flex-direction:column;

    }

`;

export const Hero = styled.section`

    max-width:1400px;

    margin:0 auto;

    padding:
        ${({theme})=>theme.spacing.xxxxl}px
        ${({theme})=>theme.spacing.lg}px
        ${({theme})=>theme.spacing.xxxl}px;

`;

export const Breadcrumb = styled.div`

    font-family:${({theme})=>theme.fonts.body};

    font-size:.82rem;

    text-transform:uppercase;

    letter-spacing:1.5px;

    color:${({theme})=>theme.colors.textMuted};

    margin-bottom:${({theme})=>theme.spacing.md}px;

`;

export const HeroTitle = styled.h1`

    margin:0;

    font-family:${({theme})=>theme.fonts.heading};

    font-size:3.5rem;

    font-weight:600;

    color:${({theme})=>theme.colors.text};

    @media(max-width:${({theme})=>theme.breakpoints.tablet}px){

        font-size:2.8rem;

    }

    @media(max-width:${({theme})=>theme.breakpoints.mobile}px){

        font-size:2.2rem;

    }

`;

export const HeroDescription = styled.p`

    max-width:560px;

    margin-top:${({theme})=>theme.spacing.md}px;

    color:${({theme})=>theme.colors.textSecondary};

    font-family:${({theme})=>theme.fonts.body};

    font-size:1.05rem;

    line-height:1.9;

    @media(max-width:${({theme})=>theme.breakpoints.mobile}px){

        font-size:.95rem;

        line-height:1.8;

    }

`;

export const Sidebar = styled.aside`

    width:290px;

    flex-shrink:0;

    display:flex;

    flex-direction:column;

    gap:${({theme})=>theme.spacing.xxl}px;

    padding:${({theme})=>theme.spacing.xl}px;

    background:${({theme})=>theme.colors.surface};

    border:1px solid ${({theme})=>theme.colors.border};

    border-radius:${({theme})=>theme.radius.xl}px;

    box-shadow:${({theme})=>theme.shadows.sm};

    height:fit-content;

    top:110px;

    @media(max-width:${({theme})=>theme.breakpoints.tablet}px){

        width:100%;

        position:static;

    }

`;

export const SidebarTitle = styled.h2`

    display:flex;

    align-items:center;

    gap:${({theme})=>theme.spacing.sm}px;

    margin:0;

    font-family:${({theme})=>theme.fonts.heading};

    font-size:2rem;

    font-weight:600;

    color:${({theme})=>theme.colors.text};

    svg{

        color:${({theme})=>theme.colors.gold};

        font-size:1.5rem;

        flex-shrink:0;

    }

`;

export const FilterGroup = styled.div`

    display:flex;

    flex-direction:column;

    gap:${({theme})=>theme.spacing.md}px;

`;

export const FilterTitle = styled.h3`

    margin:0;

    padding-bottom:${({theme})=>theme.spacing.sm}px;

    border-bottom:1px solid ${({theme})=>theme.colors.border};

    font-family:${({theme})=>theme.fonts.body};

    font-size:.95rem;

    font-weight:600;

    text-transform:uppercase;

    letter-spacing:1px;

    color:${({theme})=>theme.colors.gold};

`;

export const FilterOption = styled.label`

    display:flex;

    align-items:center;

    gap:12px;

    cursor:pointer;

    color:${({theme})=>theme.colors.textSecondary};

    font-family:${({theme})=>theme.fonts.body};

    transition:.25s;

    &:hover{

        color:${({theme})=>theme.colors.text};

    }

    input{

        accent-color:${({theme})=>theme.colors.gold};

        width:18px;

        height:18px;

        cursor:pointer;

    }

`;

export const RadioOption = styled.label`

    display:flex;

    align-items:center;

    gap:12px;

    cursor:pointer;

    color:${({theme})=>theme.colors.textSecondary};

    transition:.25s;

    font-family:${({theme})=>theme.fonts.body};

    &:hover{

        color:${({theme})=>theme.colors.text};

    }

    input{

        accent-color:${({theme})=>theme.colors.gold};

        width:18px;

        height:18px;

        cursor:pointer;

    }

`;

export const MainContent = styled.main`
  flex: 1;
`;

export const HeaderSection = styled.div`

    display:flex;

    justify-content:space-between;

    align-items:flex-start;

    gap:${({theme})=>theme.spacing.lg}px;

    margin-bottom:${({theme})=>theme.spacing.xxxl}px;

    @media(max-width:${({theme})=>theme.breakpoints.mobile}px){

        flex-direction:column;

        align-items:flex-start;

    }

`;

export const ResultsContainer = styled.div`

    display:flex;

    flex-direction:column;

    gap:${({theme})=>theme.spacing.xs}px;

`;

export const ResultsTitle = styled.h2`

    margin:0;

    font-family:${({theme})=>theme.fonts.heading};

    font-size:2rem;

    font-weight:600;

    color:${({theme})=>theme.colors.text};

    @media(max-width:${({theme})=>theme.breakpoints.mobile}px){

        font-size:1.7rem;

    }

`;

export const ResultsText = styled.span`

    font-family:${({theme})=>theme.fonts.body};

    font-size:.95rem;

    color:${({theme})=>theme.colors.textSecondary};

`;

export const SortContainer = styled.div`

    display:flex;

    flex-direction:column;

    gap:${({theme})=>theme.spacing.sm}px;

    min-width:220px;

    @media(max-width:${({theme})=>theme.breakpoints.mobile}px){

        width:100%;

    }

`;

export const SortLabel = styled.label`

    font-family:${({theme})=>theme.fonts.body};

    font-size:.85rem;

    text-transform:uppercase;

    letter-spacing:1px;

    color:${({theme})=>theme.colors.gold};

`;

export const SortSelect = styled.select`

    height:48px;

    padding:0 16px;

    border-radius:${({theme})=>theme.radius.md}px;

    border:1px solid ${({theme})=>theme.colors.border};

    background:${({theme})=>theme.colors.surface};

    color:${({theme})=>theme.colors.text};

    font-family:${({theme})=>theme.fonts.body};

    cursor:pointer;

    transition:.25s;

    &:hover{

        border-color:${({theme})=>theme.colors.gold};

    }

    &:focus{

        outline:none;

        border-color:${({theme})=>theme.colors.gold};

    }

    @media(max-width:${({theme})=>theme.breakpoints.mobile}px){

        width:100%;

    }

`;

export const ProductsGrid = styled.div`
  display: grid;

  grid-template-columns: repeat(
    auto-fill,
    minmax(260px, 1fr)
  );

  gap: 16px;
`;

export const ClearFiltersButton = styled.button`

    display:flex;

    align-items:center;

    justify-content:center;

    gap:${({theme})=>theme.spacing.sm}px;

    margin-top:${({theme})=>theme.spacing.md}px;

    width:100%;

    height:46px;

    border:1px solid ${({theme})=>theme.colors.border};

    border-radius:${({theme})=>theme.radius.md}px;

    background:transparent;

    color:${({theme})=>theme.colors.textSecondary};

    font-family:${({theme})=>theme.fonts.body};

    font-size:.95rem;

    cursor:pointer;

    transition:.25s;

    svg{

        font-size:1rem;

    }

    &:hover{

        border-color:${({theme})=>theme.colors.gold};

        color:${({theme})=>theme.colors.gold};

        background:${({theme})=>theme.colors.surfaceHover};

    }

    &:disabled{

      opacity:.45;

      cursor:default;

      border-color:${({theme})=>theme.colors.border};

      color:${({theme})=>theme.colors.textMuted};

      background:transparent;

  }

  &:disabled:hover{

      border-color:${({theme})=>theme.colors.border};

      color:${({theme})=>theme.colors.textMuted};

      background:transparent;

  }

`;

export const ErrorContainer = styled.div`
    min-height: 500px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    gap: ${({ theme }) => theme.spacing.md}px;

    text-align: center;

    h2 {
        color: ${({ theme }) => theme.colors.text};
        font-size: 2rem;
    }

    p {
        color: ${({ theme }) => theme.colors.textSecondary};
        font-size: 1rem;
    }
`;
